import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper.component';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { AuthorizationGuard } from '../guards/authorization.guard';
import { resolveService } from '../service/resolve.service';
import { AuthenticationService } from '../service/authentication.service';

const routes: Routes = [{
    path: '',
    component: WrapperComponent,
    canActivate: [AuthenticationGuard],
    children: [{
        path: '',
        loadChildren: './../query/query.module#QueryModule',
      },{
        path: 'show',
        loadChildren: './../list-query/list-query.module#ListQueryModule',
        resolve: {
          users: resolveService
        }
      },{
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }]
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        WrapperComponent,
        HeaderComponent,
    ],
    providers: [ resolveService, AuthenticationGuard, AuthenticationService ],
    exports: [
        HeaderComponent,
    ]
})

export class WrapperRoutingModule {

}