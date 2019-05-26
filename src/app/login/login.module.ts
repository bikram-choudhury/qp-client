import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../service/authentication.service';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes:Routes = [{
    path: '',
    component: LoginComponent
}]

@NgModule({
    declarations: [LoginComponent],
    imports:[
        RouterModule.forChild(routes),
        CommonModule,
        FormsModule
    ],
    providers:[AuthenticationService]
})
export class LoginModule {

}