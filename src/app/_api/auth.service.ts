// angular
import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// custom
import { config } from '../app.config';

@Injectable()
export class AuthService {
  private path: string =  `${config.apiUrl}/auth`;
  private headers: Headers = new Headers();

  constructor(private http: Http) { }

  login(obj): Observable<any> {
    let url = `${this.path}/login.php`;

    return this.http.post(url, obj, { headers: this.headers })
      .map((response: Response) => {
        if (response.status == 204) return undefined;
        else return response.json() || {};
      });
  }
}
