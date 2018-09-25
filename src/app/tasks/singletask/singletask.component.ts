import { TaskCommentService } from './../shared/services/taskcommentservice';
import { TaskComment } from './../../models/taskcomment';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';
import { Comment } from '@angular/compiler';
import { UserService } from '../../shared/service/user.service';

@Component({
  selector: 'app-singletask',
  templateUrl: './singletask.component.html',
  styleUrls: ['./singletask.component.css']
})
export class SingletaskComponent implements OnInit {

  @Input()
  public task : Task = new Task();
  @Input()
  public deletable: boolean = false;

  @Output("deleteEvent")
  public emitter : EventEmitter<Task> = new EventEmitter<Task>();

  public user :any = {};

  constructor(private serviceUser:  UserService,private serviceTaskComment: TaskCommentService) { 
    this.user= JSON.parse(serviceUser.getUser());
  }
  
  ngOnInit() {
    
  }


  delete(){
    
    this.emitter.emit(this.task);
  }


  

  

}
