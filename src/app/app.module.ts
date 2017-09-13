import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpModule } from '@angular/http';

import { MdRadioModule, MdButtonModule, MdIconModule } from '@angular/material';
import {MdMenuModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { StatisticComponent } from './statistic/statistic.component';
import { TripFormComponent } from './trip-form/trip-form.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    TripListComponent,
    StatisticComponent,
    TripFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdRadioModule,
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
