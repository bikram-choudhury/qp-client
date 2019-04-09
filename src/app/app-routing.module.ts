import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { resolveService } from './service/resolve.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'query',
    pathMatch: 'full'
  },{
    path: 'query',
    loadChildren: './query/query.module#QueryModule'
  },{
    path: 'show',
    loadChildren: './list-query/list-query.module#ListQueryModule',
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
  providers: [resolveService],
  exports: [RouterModule]
})
export class AppRoutingModule { }
