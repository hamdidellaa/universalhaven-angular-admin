
import {  Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RefugeeComponent } from '../refugee/refugee.component';
import { NewrefugeeComponent } from '../newrefugee/newrefugee.component';
import { TestcompComponent } from '../../testcomp/testcomp.component';

const appRoutes: Routes = [
    { path:"Refugees",component: RefugeeComponent,pathMatch: 'full' },
    { path:"Newrefugee",component: NewrefugeeComponent },
    { path:"test",component: TestcompComponent }
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
export class RefugeesRoutingModule { }
