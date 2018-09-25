import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCommentService } from './services/taskcommentservice';
import { TaskService } from './services/taskservice';
import { TasknotificationserviceService } from './services/tasknotificationservice.service';
import {DatepipePipe} from "./datepipe.pipe";
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DatepipePipe],
  providers : [TaskService,TaskCommentService,TasknotificationserviceService],
  exports:[
     DatepipePipe
  ]
})
export class SharedModule { }
