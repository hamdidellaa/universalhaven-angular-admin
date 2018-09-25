import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampsComponent } from './camps/camps.component';
import { CampsRoutingModule } from './camps-routing/camps-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CampService } from './../camps/services/camp.service';
import { KeysPipe } from './KeysPipe ';
import { NewCampComponent } from './new-camp/new-camp.component';
import { AgmCoreModule } from '@agm/core';
import { RoomsComponent } from './rooms/rooms.component';
import { UpdateCampComponent } from './update-camp/update-camp.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable'
@NgModule({
  imports: [
    CommonModule,
    CampsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCnmpWtBuHWxFfEJa3RpRZ8nqsMt7gU_Cg',
      libraries: ['geometry', 'places'],
      language: 'en',
    })
  ],
  declarations: [KeysPipe,CampsComponent, NewCampComponent, RoomsComponent, UpdateCampComponent ],
  exports : [CampsComponent, NewCampComponent],
  providers : [CampService]
})
export class CampsModule { 
  
}
