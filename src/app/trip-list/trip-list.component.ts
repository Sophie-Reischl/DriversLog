import { Component, OnInit } from '@angular/core';

import { TripService } from '../trip.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss'],
  providers: [TripService]
})
export class TripListComponent implements OnInit {

  constructor(private tripService: TripService) { }

  ngOnInit() {
    this.tripService.readAll().subscribe(
      (trips) => {
        console.log(trips);
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
