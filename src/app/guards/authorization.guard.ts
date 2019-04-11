import { Injectable } from '@angular/core';
import { CanLoad, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationGuard implements CanLoad {
    constructor(private _authentication: AuthenticationService, private _routes: Router){}
    
    canLoad() : Observable<boolean> | Promise<boolean> | boolean {
        if(!this._authentication.checkAndValidateToken()) {
            this._routes.navigate(['/']);
            return false;
        }
        return true;
    }
}