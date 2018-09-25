import { UserService } from './../../shared/service/user.service';
import { TaskComment } from './../../models/taskcomment';
import { TaskCommentService } from './../shared/services/taskcommentservice';
import { Task } from './../../models/task';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../shared/services/taskservice';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { TasknotificationserviceService } from '../shared/services/tasknotificationservice.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit {

  public task: Task = new Task();
  public comment: TaskComment = new TaskComment();
  public content: FormControl = new FormControl('', Validators.required);
  constructor(private activatedRoute: ActivatedRoute, private taskService: TaskService,
    private taskCommentService: TaskCommentService, private notification: TasknotificationserviceService,
    private userService :UserService) {
      
  }
  private audio;
  playAudio(){
    this.audio = new Audio();
    this.audio.src = "../../../assets/sounds/notif.mp3";
    this.audio.load();
    this.audio.play();
  }
  private user: any= {};
  ngOnInit() {
    this.user= JSON.parse(this.userService.getUser());
    this.notification.listenForComments().subscribe((c: string) => {
      let comment: TaskComment = JSON.parse(c);
      let tmp = [comment];
      if ( (comment.TaskId==this.task.id)  && (comment.Publisher!=this.user.login) ){
        this.playAudio(); 
        this.task.comments = tmp.concat(this.task.comments);
      }
    });
    this.activatedRoute.params.subscribe(params => {
      let id = params["id"];
      this.taskService.getTaskById(id).subscribe(task => {
        this.task = task;
        this.taskCommentService.getTaskComments(id).subscribe(comments => {
          this.task.comments = comments;
          this.task.comments.reverse();
        }, err => {
          console.log(err);
        });
      }, err => {
        console.log(err);
      })
    });
  }


  addComment() {
    if (this.comment.Content == "") {
      return;
    }

    this.taskCommentService.addComment(this.comment, this.task.id).subscribe(comment => {
      let tmp = [comment];

      this.task.comments = tmp.concat(this.task.comments);
      // this.task.comments.push(comment);
      comment.to= this.user.login==this.task.taskAssigner ? this.task.taskExecutor :this.task.taskAssigner;
      this.notification.sendCommentNotification(comment);

      this.comment = new TaskComment();
    }, err => {
      console.log(err);
    });
  }

  deleteComment(comment) {

    this.taskCommentService.removeComment(comment).subscribe(resp => {

      this.task.comments.splice(this.task.comments.indexOf(comment), 1);

    }, err => {
      console.log(err);
    });
  }

}
