import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { config } from './../../config';
import { LoginTypeModal } from './../models/login.model';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthenticationService {
    private apiURL: string = config.server.url;
    constructor(private _http: HttpClient) { }

    private random() {
        return Math.random().toString(36).substr(2); // remove `0.`
    }
    authenticate(user: LoginTypeModal): Observable<any>  {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        return this._http.post(`${this.apiURL}/api/user/authenticate`, user, options).pipe(
            map((response:{[key: string]: string}) => {
                if (response.token) {
                    localStorage.setItem('token', response.token);
                }
                return response;
            })
        )
    }

    createAndSaveToken() {
        const token = this.random() + this.random();
        localStorage.setItem('token', token);
    }
    checkAndValidateToken() {
        return !!localStorage.getItem('token');
    }
}