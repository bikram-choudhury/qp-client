import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueryComponent } from './query/query.component';
import { ListQueryComponent } from './list-query/list-query.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'query',
    pathMatch: 'full'
  },{
    path: 'query',
    component: QueryComponent
  },{
    path: 'query/:docId',
    component: QueryComponent
  },{
    path: 'show',
    component: ListQueryComponent
  },{
    path: '**',
    redirectTo: 'query',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
