import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of as observableOf } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpService {
    private _host = '//localhost:8080/api'; // server URL
    constructor(private _http: HttpClient) { }

    saveQuery(query:any) : Observable<any> {
        const apiURL = `${this._host}/api/save`;
        const options = {
            headers : new HttpHeaders({
              'Content-Type': 'application/json'
            })
          };
        return this._http.post(apiURL, JSON.stringify(query), options).pipe(
            map(response => response),
            catchError(err => observableOf(err))
        )
    }
    fetchQuery(queryId?:string): Observable<any> {
        const apiURL = `${this._host}/${queryId}`;
        return this._http.get(apiURL);
    }
    deleteQuery(queryId: string): Observable<any> {
        const api = `${this._host}/${queryId}`;
        return this._http.delete(api).pipe(
            map(response => response),
            catchError(err => observableOf(err))
        )
    }
}