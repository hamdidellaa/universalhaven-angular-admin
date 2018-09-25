import { CampsComponent } from './../camps/camps.component';
import { NewCampComponent } from './../new-camp/new-camp.component';
import { RoomsComponent } from './../rooms/rooms.component';
import {  Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UpdateCampComponent } from '../update-camp/update-camp.component';

const appRoutes: Routes = [
    { path:"Camp",component: CampsComponent,pathMatch: 'full' },
    { path:"Camp/NewCamp",component: NewCampComponent},
    { path:"Room/NewRoom",component: RoomsComponent},
    { path:"Camp/UpdateCamp/:idcamp",component: UpdateCampComponent},
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
export class CampsRoutingModule { }
