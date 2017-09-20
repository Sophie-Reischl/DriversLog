// angular
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MD_DIALOG_DATA } from '@angular/material';

import { mode } from '../app.config';

@Component({
  selector: 'app-trip-dialog',
  templateUrl: './trip-dialog.component.html',
  styleUrls: ['./trip-dialog.component.scss']
})
export class TripDialogComponent {
  tripForm: FormGroup;
  mode = mode;

  constructor(@Inject(MD_DIALOG_DATA) public data: any, private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.tripForm = this.fb.group({
      id: [this.data.trip.id],
      date: [this.data.trip.date, [Validators.required]],
      startKm: [this.data.trip.startKm, [Validators.required]],
      endKm: [this.data.trip.endKm],
      totalKm: [this.data.trip.totalKm],
      comment: [this.data.trip.comment]
    })
  }

  calcTotalKm() {
    let val = this.tripForm.value;

    if (val.endKm && val.startKm) {
      let result = val.endKm - val.startKm;
      if (result < 0) result = 0;

      this.tripForm.controls['totalKm'].setValue(result);
    }
  }
}
