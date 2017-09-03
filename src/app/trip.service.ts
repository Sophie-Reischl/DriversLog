import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { config } from './app.config';
import { Trip } from './models/trip';

@Injectable()
export class TripService {
  private path: string = config.apiUrl + '/trip';
  private headers: Headers = new Headers();

  constructor(private http: Http) { }

  readAll(): Observable<Array<Trip>> {
    let url = `${this.path}/read_all.php`;

    return this.http.get(url, { headers: this.headers })
      .map((response: Response) => {
        if (response.status == 204) return undefined;
        else return response.json() || {};
      })
  }
}
