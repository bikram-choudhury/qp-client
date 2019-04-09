import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListQueryComponent } from './list-query.component';

const routes:Routes = [{
    path: '',
    component: ListQueryComponent
}, {
    path: '**',
    redirectTo: ''
}]

@NgModule({
    declarations: [
        ListQueryComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [],
    exports: [RouterModule]
})
export class ListQueryModule { }