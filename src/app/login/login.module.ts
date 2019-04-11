import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { AuthenticationService } from '../service/authentication.service';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [{
    path: '',
    component: LoginComponent
}]

@NgModule({
    declarations: [LoginComponent],
    imports:[
        RouterModule.forChild(routes)
    ],
    providers:[AuthenticationService]
})
export class LoginModule {

}