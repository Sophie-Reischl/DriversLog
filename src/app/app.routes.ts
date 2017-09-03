import { RouterModule, Routes } from '@angular/router';
import { TripListComponent } from './trip-list/trip-list.component';
import { StatisticComponent } from './statistic/statistic.component';
import { TripFormComponent } from './trip-form/trip-form.component';

export const appRoutes: Routes = [
  {
    path: 'trips',
    component: TripListComponent
  },
  {
    path: 'statistic',
    component: StatisticComponent
  },
  {
    path: 'trip',
    component: TripFormComponent
  }
]
