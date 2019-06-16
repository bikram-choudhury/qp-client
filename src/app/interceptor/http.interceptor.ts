import { Injectable } from '@angular/core';
import { HttpInterceptor, HTTP_INTERCEPTORS, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class HttpInterceptors implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if(token) {
        request = request.clone({
            setHeaders: {
              'Authorization-code': token
            }
          })
    }
    return next.handle(request).pipe(
            map((event: HttpEvent<any>)=> event),
            catchError((error: HttpErrorResponse) => {
                const status:number = error.status; 
                let message:string = '';
                const data = {status};
                switch(status) {
                    case 0: message = 'Request failed/cancelled'; break;
                    case 400: message = error.error && error.error.message || 'Bad Request'; break;
                    case 401: message = error.error && error.error.message || 'Unauthorized'; break;
                    case 403: message = error.error && error.error.message || 'Forbidden'; break;
                    case 404: message = error.error && error.error.message || 'URL Not Found'; break;
                    case 405: message = error.error && error.error.message || 'Method Not Allowed'; break;
                    case 406: message = error.error && error.error.message || 'DATA Not Acceptable'; break;
                    case 408: message = error.error && error.error.message || 'Request Timeout'; break;
                    case 500: message = error.error && error.error.message || 'Internal Server Error'; break;
                    case 504: message = error.error && error.error.message || 'Gateway Timeout'; break;
                    default: message = error.message;
                }
                data['message'] = message;
                console.log(data);
                return throwError(error);
            })
        );
  }
}
