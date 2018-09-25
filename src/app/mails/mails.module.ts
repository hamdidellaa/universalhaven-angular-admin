import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllmailComponent } from './allmail/allmail.component';
import { MailsRoutingModule } from './mails-routing/mails-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MailsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AllmailComponent],
  exports : [AllmailComponent]
})
export class MailsModule { 
  
}
