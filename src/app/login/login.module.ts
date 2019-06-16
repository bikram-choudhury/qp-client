import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../service/authentication.service';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrationService } from '../service/register.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptors } from '../interceptor/http.interceptor';

const routes:Routes = [{
    path: '',
    component: LoginComponent
}]

@NgModule({
    declarations: [LoginComponent],
    imports:[
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule,
        HttpClientModule
    ],
    providers:[
        AuthenticationService,
        RegistrationService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpInterceptors,
            multi: true
        }
    ]
})
export class LoginModule {

}