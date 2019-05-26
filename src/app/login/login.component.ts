import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

interface LoginTypeModal {
    username: string,
    password: string
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    email: string = 'Email / Username';
    password: string = 'Password';
    panel: string = 'login';
    loginFormData: LoginTypeModal = {
        username: '',
        password: ''
    };
    constructor(private _authentication: AuthenticationService, private _routes: Router) { }
    validateUser() {
        this._authentication.createAndSaveToken();
        this._routes.navigate(['query']);
    }

    switchPanel(panelType: string) {
        this.panel = panelType;
    }
    validateEmail(email: string): boolean {
        const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(email);
    }
    login(event: Event, loginForm) {
        event.preventDefault();
        console.log("Form submitted with : ", this.loginFormData);
        const loginData: LoginTypeModal = this.loginFormData;
        if (!this.validateEmail(loginData.username)) {
            console.log('Invalid email');
            return false;
        }
        return true;
    }
}