import { StatsComponent } from './../stats/stats.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
const appRoutes: Routes = [
  { path: 'donationstats', component: StatsComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  declarations: [],
  exports: [RouterModule]
})


export class DonationroutingModule { }
