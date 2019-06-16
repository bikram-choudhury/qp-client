import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/register.service';
import { LoginTypeModal } from './../models/login.model';

interface RegisterTypeModal {
    name: string,
    email: string,
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
export class LoginComponent implements OnInit {

    email: string = 'Email';
    password: string = 'Password';
    newpassword: string = 'New Password';
    panel: string = 'login';
    loginFormData: LoginTypeModal = {
        username: '',
        password: ''
    };
    registerFormData: RegisterTypeModal = {
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    }

    constructor(private _authentication: AuthenticationService, private _routes: Router, private _register: RegistrationService) { }
    
    ngOnInit() {
        const token = localStorage.getItem('token');
        if (token) {
            location.href = "https://cli.angular.io/";
        }
    }
    forgetpasswordFormDataEmail: ForgetpasswordTypeModalEmail = {
        usernameforgetpassword: ''
    }
    forgetpasswordFormDataPC: ForgetpasswordTypeModalPC = {
        newpassword: '',
        confirm_password: ''
    }
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
        this._authentication.authenticate(loginData).subscribe(
            (success) => {
                if (success.token) {
                    location.href = "https://cli.angular.io/";
                }
            },
            (error) => console.error(error),
            () => console.log('Finally')
        )
    }
    register(event: Event, registerForm) {
        event.preventDefault();
        console.log("registerForm Data: ", registerForm);
        if (registerForm.valid) {
            this._register.saveUserData(this.registerFormData).subscribe(
                response => {
                    if(response.userId) {
                        this.registerFormData = {
                            name: '',
                            email: '',
                            password: '',
                            confirm_password: ''
                        }
                    }
                }
            );
        }
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