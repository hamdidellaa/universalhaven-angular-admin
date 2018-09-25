import { ChartsModule } from 'ng2-charts';
import { DonationroutingModule } from './donationrouting/donationrouting.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats/stats.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from '../tasks/tasks.module';
@NgModule({
  imports: [
    CommonModule,
    DonationroutingModule,
    Ng2GoogleChartsModule,
    SharedModule,
    ChartsModule,
    TasksModule
  ],
  declarations: [StatsComponent]
})
export class DonationModule { }
