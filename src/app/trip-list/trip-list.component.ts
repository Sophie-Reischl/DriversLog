// angular
import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

// models
import { Trip } from '../_models/trip';

// custom
import { TripService } from '../_api/trip.service';
import { TripDialogComponent } from '../trip-dialog/trip-dialog.component';
import { mode } from '../app.config';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss'],
  providers: [TripService]
})
export class TripListComponent implements OnInit {
  trips: Trip[] = null;

  constructor(
    private tripService: TripService,
    public dialog: MdDialog) { }

  ngOnInit() {
    this.tripService.readAll().subscribe(
      response => this.trips = response,
      error => console.log(error)
    )
  }

  openDialog(trip) {
    let dialogRef = this.dialog.open(TripDialogComponent, {
      data: {
        mode: trip ? mode.edit : mode.new,
        trip: trip ? trip : new Trip()
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);

      // abort if no result (backdrop click)
      if (!result) return;

      // new trip
      if (result.mode == 0 && result.ok) {
        this.tripService.create(result.trip).subscribe(
          (response) => {
            console.log(response)
            this.trips.push(result.trip)
          },
          (error) => {
            console.log(error)
          }
        )
      }

      // update trip
      if (result.mode == 1 && result.ok) {

      }

      // delete trip
      if (result.mode == 2) {
        this.tripService.delete(result.trip.id).subscribe(
          response => console.log(response),
          error => console.log(error)
        )
      }
    });
  }
}
