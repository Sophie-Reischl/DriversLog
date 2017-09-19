// angular
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {}

  isHeaderbarShowing() {
    if (this.router.url.includes('/login')) return false;
    else return true;
  }
}
