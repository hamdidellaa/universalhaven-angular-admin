import { DetailEventComponent } from './../detail-event/detail-event.component';
import { MyeventsComponent } from './../myevents/myevents.component';
import { FundraisingeventstatsComponent } from './../fundraisingeventstats/fundraisingeventstats.component';
import { UpdateeventComponent } from './../updateevent/updateevent.component';
import { CreateEventComponent } from './../create-event/create-event.component';
import { AlleventsComponent } from './../allevents/allevents.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
const appRoutes: Routes = [
    { path:"fundraisingEvents",component: AlleventsComponent,pathMatch: 'full' },
    { path : "fundraisingEvents/create" , component: CreateEventComponent}, 
    { path : "updateEvent/:id", component:UpdateeventComponent},
    { path : "fundraisingEvents/stats", component:FundraisingeventstatsComponent},
    { path:"fundraisingEvents/myEvents",component: MyeventsComponent },
    {path: "FundraisingEvent/:id", component: DetailEventComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class FundraisingeventsroutingModule { }
