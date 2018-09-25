import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RefugeesRoutingModule } from './Refugees-routing/Refugees-routing.module';
import { RefugeeComponent } from './refugee/refugee.component';
import { RefugeesService } from './services/refugees.service';
import { NewrefugeeComponent } from './newrefugee/newrefugee.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable'
import { CloudinaryModule } from '@cloudinary/angular-4.x';
import * as  Cloudinary from 'cloudinary-core';
@NgModule({
  imports: [
    CommonModule,
    RefugeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule
    
  ],
  declarations: [RefugeeComponent, NewrefugeeComponent ],
  exports : [RefugeeComponent],
  providers : [RefugeesService]
})
export class RefugeesModule { 
  
}
