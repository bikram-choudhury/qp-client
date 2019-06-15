import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

interface LoginTypeModal {
    username: string,
    password: string
}
interface RegisterTypeModal {
    username: string,
    password: string,
    confirm_password: string
}

interface ForgetpasswordTypeModalEmail {
    usernameforgetpassword: string
}

interface ForgetpasswordTypeModalPC {
    newpassword: string,
    confirm_password: string
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    email: string = 'Email / Username';
    password: string = 'Password';
    newpassword: string = 'New Password';
    panel: string = 'login';
    loginFormData: LoginTypeModal = {
        username: '',
        password: ''
    };
    registerFormData: RegisterTypeModal = {
        username: '',
        password: '',
        confirm_password: ''
    }

    forgetpasswordFormDataEmail: ForgetpasswordTypeModalEmail = {
        usernameforgetpassword: ''

    }

    forgetpasswordFormDataPC: ForgetpasswordTypeModalPC = {
        newpassword: '',
        confirm_password: ''
    }

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
    register(event: Event, registerForm) {
        event.preventDefault();
        console.log("registerForm Data: ", registerForm);
    }

    forgetpasswordEmail(event: Event, forgetpasswordFormEmail) {
        event.preventDefault();
        console.log("forgetpasswordFormEmail Data: ", forgetpasswordFormEmail);
    }

    
    forgetpasswordPC(event: Event, forgetpasswordFormPC) {
        event.preventDefault();
        console.log("forgetpasswordFormPC Data: ", forgetpasswordFormPC);
    }
}