import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { isTokenValid } from '../app.config';

@Injectable()
export class UnAuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {

    // token is not expired
    if (!isTokenValid()) return true

    this.router.navigate(['/'])
    return false
  }
}
