import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { QueryComponent } from './query.component';

const routes:Routes = [{
    path: '',
    children: [{
        path: '',
        component: QueryComponent
    }, {
        path: '/:docId',
        component: QueryComponent
    }]
}, {
    path: '**',
    redirectTo: ''
}]

@NgModule({
    declarations: [
        QueryComponent
    ],
    imports: [
        FormsModule,
        NgbModule.forRoot(),
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot(),
        RouterModule.forChild(routes)
    ],
    providers: [],
    exports: [RouterModule]
})
export class QueryModule { }