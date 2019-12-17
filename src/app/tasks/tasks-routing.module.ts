import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasksComponent} from './containers/tasks/tasks.component';


const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'todo'},
    {path: 'todo', component: TasksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
