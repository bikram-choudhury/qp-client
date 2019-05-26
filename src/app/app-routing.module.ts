import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './service/http.service';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthenticationService } from './service/authentication.service';
import { AuthorizationGuard } from './guards/authorization.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  }, {
    path: '',
    loadChildren: './wrapper/wrapper-routing.module#WrapperRoutingModule'
  }, {
    path: '**',
    redirectTo: 'query',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    HttpService,
    AuthenticationService,
    AuthenticationGuard,
    AuthorizationGuard
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
