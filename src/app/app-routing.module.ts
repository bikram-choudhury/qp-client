import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { resolveService } from './service/resolve.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './service/http.service';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthenticationService } from './service/authentication.service';
import { AuthorizationGuard } from './guards/authorization.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },{
    path: 'query',
    loadChildren: './query/query.module#QueryModule',
    canActivate: [AuthenticationGuard]
  },{
    path: 'show',
    loadChildren: './list-query/list-query.module#ListQueryModule',
    canLoad: [AuthorizationGuard],
    resolve: {
      users: resolveService
    }
  },{
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
  providers: [resolveService, HttpService, AuthenticationService, AuthenticationGuard, AuthorizationGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
