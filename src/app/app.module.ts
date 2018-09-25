import { ResourcesModule } from './resources/resources.module';
import { FundraisingeventModule } from './fundraisingEvent/fundraisingevent.module';
import { TasksModule } from './tasks/tasks.module';
import { MailsModule } from './mails/mails.module';
import { CampsModule } from './camps/camps.module';
import { RefugeesModule } from './refugees/Refugees.module';
import { TestcompModule } from './testcomp/testcomp.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarmenuComponent } from './shared/sidebarmenu/sidebarmenu.component';
import { AppRouting } from './app-routing';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CustomFormsModule } from 'ng2-validation'
import { DonationModule } from './donation/donation.module';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    CustomFormsModule,
    SharedModule,
    RouterModule,
    AppRouting,
    TasksModule,
    MailsModule,
    CampsModule,
    RefugeesModule,
    ResourcesModule,
    FormsModule,
    TestcompModule,
    ReactiveFormsModule,
    FundraisingeventModule,
    Ng2GoogleChartsModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SharedModule]
})
export class AppModule { }
