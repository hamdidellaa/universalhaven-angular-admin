
import { AllmailComponent } from './../allmail/allmail.component';
import {  Routes , RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path:"mail",component: AllmailComponent,pathMatch: 'full' },
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
export class MailsRoutingModule { }
