// angular
import { Component, OnInit } from '@angular/core';

// models
import { Trip } from '../_models/trip';

// custom
import { TripService } from '../_api/trip.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss'],
  providers: [TripService]
})
export class TripListComponent implements OnInit {
  trips: Trip[] = null;

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.readAll().subscribe(
      result => this.trips = result,
      error => console.log(error)
    )
  }
}
