import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from './../../config';

interface RegisterTypeModal {
  name: string,
  email: string,
  password: string,
  confirm_password: string
}

@Injectable()
export class RegistrationService {
  apiURL: string = config.server.url;

  constructor(private _http: HttpClient){}

  saveUserData(user: RegisterTypeModal): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    const userData = user;
    userData['username'] = user.email;
    return this._http.post(`${this.apiURL}/api/user/register`, userData, options)
  }
}