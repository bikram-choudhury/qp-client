import { Component } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    constructor(private _authentication: AuthenticationService, private _routes: Router){}
    validateUser() {
        this._authentication.createAndSaveToken();
        this._routes.navigate(['query']);
    }
}