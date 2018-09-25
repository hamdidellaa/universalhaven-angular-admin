import { ModifyresourceComponent } from './../modifyresource/modifyresource.component';
import { CreateresourceComponent } from './../createresource/createresource.component';
import { ResourceItemComponent } from './../resource-item/resource-item.component';
import { ResourceListComponent } from './../resource-list/resource-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  {path:'resource', component: ResourceListComponent,pathMatch: 'full'},
  {path:'resource/create', component: CreateresourceComponent},
  {path:'resource/update/:id', component: ModifyresourceComponent}
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
export class ResourceRoutingModule { }
