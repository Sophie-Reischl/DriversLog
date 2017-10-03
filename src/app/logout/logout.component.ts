// angular
import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { MdSnackBar } from '@angular/material'

import { removeTokenFromLS } from '../app.config';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
  providers: []
})
export class LogoutComponent {

  constructor(private router: Router, private snackBar: MdSnackBar) {
    removeTokenFromLS()

    this.snackBar.open('Erfolgreich abgemeldet', null, {
      duration: 2000
    })

    this.router.navigate(['/login'])
  }
}
