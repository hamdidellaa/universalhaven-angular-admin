import { TaskComment } from './../../models/taskcomment';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { UserService } from '../../shared/service/user.service';
import { Output } from '@angular/core';

@Component({
  selector: 'app-singletaskcomment',
  templateUrl: './singletaskcomment.component.html',
  styleUrls: ['./singletaskcomment.component.css']
})
export class SingletaskcommentComponent implements OnInit {


  @Input()
  public comment : TaskComment;
  
  @Output("commentDeleted")
  public emitter : EventEmitter<TaskComment> = new EventEmitter();


  user : any = {};
  ngOnInit() {
  }

  constructor(private serviceUser:  UserService) { 
    this.user= JSON.parse(serviceUser.getUser());
  }
  canDeleteComment(comment: TaskComment){
    if (comment.PublisherId==this.user.id){
      return true;
    }
    return false;
  }

  delete(){
    this.emitter.emit(this.comment);
  }




}
