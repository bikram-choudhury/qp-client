import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of as observableOf } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpService } from './http.service';

@Injectable()
export class resolveService implements Resolve<any> {
  // private _appUrl: string = '//jsonplaceholder.typicode.com';
  constructor(private _http: HttpService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any[]> {
    return this._http.fetchQuery().pipe(
      map(resposnse => resposnse),
      catchError(error => {
          let errRes = {
              status: error.status,
              statusText: error.statusText,
              type: error.type,
              url: error.url
          };
          return observableOf(errRes);
      })
  )
  }

  /*resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<any[]> {
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
  }*/

}