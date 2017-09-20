// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpModule } from '@angular/http';

// angular material
import {
  MdRadioModule,
  MdButtonModule,
  MdIconModule,
  MdInputModule,
  MdMenuModule,
  MdSnackBarModule,
  MdListModule,
  MdDialogModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdProgressBarModule
} from '@angular/material';

// third party angular modules
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// custom
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { StatisticComponent } from './statistic/statistic.component';
import { LoginComponent } from './login/login.component';
import { TripDialogComponent } from './trip-dialog/trip-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    TripListComponent,
    StatisticComponent,
    LoginComponent,
    TripDialogComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MdRadioModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdInputModule,
    MdSnackBarModule,
    MdListModule,
    MdDialogModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdProgressBarModule
  ],
  providers: [],
  entryComponents: [TripDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
