// angular
import { Component, OnInit } from '@angular/core'
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material'

// models
import { Trip } from '../_models/trip'

// custom
import { TripService } from '../_api/trip.service'
import { TripDialogComponent } from '../trip-dialog/trip-dialog.component'
import { DialogHandlingService } from '../dialog-handling.service'
import { mode } from '../app.config'

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss'],
  providers: [TripService]
})
export class TripListComponent implements OnInit {
  trips: Trip[] = null

  constructor(
    private tripService: TripService,
    public dialog: MdDialog,
    private handle: DialogHandlingService) { }

  ngOnInit() {
    this.tripService.readAll().subscribe(
      response => this.trips = response.sort(this.dynamicSort('-date')),
      error => console.log(error)
    )
  }

  openDialog(trip) {
    let dialogRef = this.dialog.open(TripDialogComponent, {
      data: {
        mode: trip ? mode.edit : mode.new,
        trip: trip ? trip : new Trip()
      }
    })

    dialogRef.afterClosed().subscribe(result => {

      // abort if no result (backdrop click)
      if (result) {
        if (result.ok) {

          // new trip
          if (result.mode == 0 && result.ok) {
            this.addTrip(result.trip)
          }

          // update trip
          if (result.mode == 1 && result.ok) {
            this.updateTrip(result.trip)
          }

          // delete trip
          if (result.mode == 2) this.deleteTrip(result.trip)
        }
      }
    })
  }

  addTrip(trip) {
    this.tripService.create(trip).subscribe(
      (response) => {
        if (response.ok) this.updateList()
        this.handle.dialog(response.message)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  updateTrip(trip) {
    this.tripService.update(trip).subscribe(
      (response) => {
        if (response.ok) this.updateList()
        this.handle.dialog(response.message)
      },
      (error) => {
        this.handle.dialog(null, true)
      }
    )
  }

  deleteTrip(trip) {
    this.tripService.delete(trip.id).subscribe(
      (response) => {
        if (response.ok) this.updateList()
        this.handle.dialog(response.message)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  updateList() {
    this.tripService.readAll().subscribe(
      response => this.trips = response.sort(this.dynamicSort('-date')),
      error => console.log(error)
    )
  }

  // from https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value-in-javascript
  dynamicSort(property) {
    var sortOrder = 1
    if(property[0] === "-") {
      sortOrder = -1
      property = property.substr(1)
    }
    return function (a,b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
      return result * sortOrder
    }
  }
}
