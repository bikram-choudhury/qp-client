import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './wrapper.component';
import { AuthenticationGuard } from '../guards/authentication.guard';
import { AuthorizationGuard } from '../guards/authorization.guard';
import { resolveService } from '../service/resolve.service';

const routes: Routes = [{
    path: '',
    component: WrapperComponent,
    children: [{
        path: '',
        redirectTo: 'query',
        pathMatch: 'full'
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
    exports: [
        HeaderComponent,
    ]
})

export class WrapperRoutingModule {

}