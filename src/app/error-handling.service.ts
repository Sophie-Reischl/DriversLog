// angular
import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class ErrorHandlingService {

  constructor(private snackBar: MdSnackBar) { }

  error(message: string = 'Gosh, something went wrong.', action: string = null) {
    this.snackBar.open(message, action, {
      duration: action ? null : 2000
    });
  }
}
