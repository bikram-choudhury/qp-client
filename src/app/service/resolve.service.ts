import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of as ObservableOf, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class resolveService implements Resolve<any> {
  private _appUrl: string = '//jsonplaceholder.typicode.com';
  constructor(private _http: HttpClient){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any[]> {
    const api = `${this._appUrl}/users`;
    return this._http.get(api).pipe(
      map((response:any[]) => {
        return response.map(adhoc => {
          return {
            id: adhoc.id,
            name: adhoc.name,
            username: adhoc.username,
            email: adhoc.email
          }
        })
      })
    );
  }

}