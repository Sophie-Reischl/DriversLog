import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { UnAuthGuard } from './_guards/unauth.guard';
import { TripListComponent } from './trip-list/trip-list.component';
import { StatisticComponent } from './statistic/statistic.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

export const appRoutes: Routes = [
  {
    path: 'trips',
    component: TripListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'statistic',
    component: StatisticComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnAuthGuard]
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/trips',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/trips',
    pathMatch: 'full'
  }
]
