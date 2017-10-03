// angular
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// models
import { Trip } from '../_models/trip';

// custom
import { getConfig } from '../app.config';

@Injectable()
export class TripService {
  private path: string = `${getConfig().apiUrl}/trip`;
  private headers: Headers = new Headers();

  constructor(private http: Http) { }

  readAll(): Observable<Array<Trip>> {
    let url = `${this.path}/read_all.php`;

    return this.http.get(url, { headers: this.headers })
      .map((response: Response) => {
        if (response.status == 204) return undefined;
        else return response.json().records || {};
      })
  }

  create(trip): Observable<Trip> {
    let url = `${this.path}/create.php`;
    console.log(trip);

    return this.http.post(url, trip, { headers: this.headers })
      .map((response: Response) => {
        if (response.status == 204) return undefined;
        else return response.json() || {};
      })
  }

  delete(id): Observable<Trip> {
    let url = `${this.path}/delete.php?id=${id}`;

    return this.http.delete(url, { headers: this.headers })
      .map((response: Response) => {
        if (response.status == 204) return undefined;
        else return response.json() || {};
      })
  }
}
