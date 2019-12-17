import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {SharedModule} from '../shared/shared.module';
import {TasksListComponent} from './component/tasks-list/tasks-list.component';
import {TasksComponent} from './containers/tasks/tasks.component';
import {tasksReducers} from './store/reducers/feature.reducers';

import {TasksRoutingModule} from './tasks-routing.module';
import { TaskFormComponent } from './component/task-form/task-form.component';


@NgModule({
    declarations: [
        TasksComponent,
        TasksListComponent,
        TaskFormComponent
    ],
    imports: [
        TasksRoutingModule,
        SharedModule,
        StoreModule.forFeature('tasks', tasksReducers),
    ]
})
export class TasksModule {
}
