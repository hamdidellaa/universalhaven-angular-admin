import { CreatetaskComponent } from './../createtask/createtask.component';
import { TaskdetailsComponent } from './../taskdetails/taskdetails.component';
import { AlltasksComponent } from './../alltasks/alltasks.component';
import {  Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TaskstatsComponent } from '../taskstats/taskstats.component';

const appRoutes: Routes = [
    { path:"task",component: AlltasksComponent,pathMatch: 'full' },
    { path : "task/details/:id" , component: TaskdetailsComponent}, 
    { path : "task/create", component:CreatetaskComponent},
    { path : "task/stats",component:TaskstatsComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
