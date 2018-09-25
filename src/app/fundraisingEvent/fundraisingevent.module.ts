import { UpdateeventComponent } from './updateevent/updateevent.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { AlleventsComponent } from './allevents/allevents.component';
import { FundraisingeventsroutingModule } from './fundraisingeventsrouting/fundraisingeventsrouting.module';
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Routes , RouterModule } from '@angular/router';
import { FundraisingeventstatsComponent } from './fundraisingeventstats/fundraisingeventstats.component';
import { FormsModule } from '@angular/forms';
import { MyeventsComponent } from './myevents/myevents.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import {NgxPaginationModule} from 'ngx-pagination';
import { DetailEventComponent } from './detail-event/detail-event.component';
import { FilterPipe } from './filter.pipe';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FundraisingeventsroutingModule,
    FormsModule,
    Ng2GoogleChartsModule,
     NgxPaginationModule
  ],
  declarations: [
    AlleventsComponent,
    CreateEventComponent,
    UpdateeventComponent,
    FundraisingeventstatsComponent,
    MyeventsComponent,
    DetailEventComponent,
    FilterPipe
  ]


})
export class FundraisingeventModule { }
