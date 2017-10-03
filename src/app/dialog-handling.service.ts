// angular
import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class DialogHandlingService {

  constructor(private snackBar: MdSnackBar) { }

  dialog(message: string, error: boolean = false, action: string = null) {
    if (!message && error) message = 'Gosh, something went wrong.'
    if (!message) return

    this.snackBar.open(message, action, {
      duration: action ? null : 2000
    });
  }
}
