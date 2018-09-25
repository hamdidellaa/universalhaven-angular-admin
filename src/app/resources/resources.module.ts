import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResourceRoutingModule } from './resource-routing/resource-routing.module';
import { ResourceService } from './shared/resource.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { ResourceItemComponent } from './resource-item/resource-item.component';
import { ResourceScrollListComponent } from './resource-scroll-list/resource-scroll-list.component';
import { VirtualScrollModule } from 'angular2-virtual-scroll';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CreateresourceComponent } from './createresource/createresource.component';
import { ModifyresourceComponent } from './modifyresource/modifyresource.component';
@NgModule({
  imports: [
    CommonModule,
    VirtualScrollModule,
    ResourceRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ResourceListComponent, ResourceItemComponent, ResourceScrollListComponent, CreateresourceComponent, ModifyresourceComponent],
  providers : [ResourceService]
})
export class ResourcesModule { }
