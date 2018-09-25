import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationService } from './donation.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [DonationService]
})
export class SharedModule { }
