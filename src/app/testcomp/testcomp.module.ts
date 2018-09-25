import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgxDatatableModule } from '@swimlane/ngx-datatable'
import { CloudinaryModule } from '@cloudinary/angular-4.x';
import * as  Cloudinary from 'cloudinary-core';
import { TestcompComponent } from './testcomp.component';
import { FileSelectDirective,FileUploadModule } from 'ng2-file-upload';
import {} from "ng2-file-upload";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    NgxDatatableModule
    
  ],
  declarations: [TestcompComponent  ],
  exports : [TestcompComponent],
  providers : []
})
export class TestcompModule { 
  
}
