import { TaskComment } from './../../models/taskcomment';
import { UserService } from './../service/user.service';
import { Component, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { TasknotificationserviceService } from '../../tasks/shared/services/tasknotificationservice.service';
import { Task } from '../../models/task';
import { Endpoints } from '../endpoints';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor(private service: UserService,private router: Router,private notificationService : TasknotificationserviceService) { }
  @Output("loggedOut")
  private emitter : EventEmitter<string> = new EventEmitter<string>();


  @Input()
  public user : any = {};
  notifications : any = [];
  notificationsCount = 0;
  private audio;
  playAudio(){
    this.audio = new Audio();
    this.audio.src = "../../../assets/sounds/notif.mp3";
    this.audio.load();
    this.audio.play();
  }
  resetNotificationCount(){
    this.notificationsCount=0;
  }
  ngOnInit() {
    
    this.notificationService.listenForNewTasks().subscribe( (t:string) =>{
      
        let task = (JSON.parse(t));
        if (task.taskExecutor == this.user.login) {
          this.notificationsCount++;
          this.playAudio();
          let notification = [
            {
              text:task.taskAssigner+" assigned you a task, check it out ! ",
              link:"task/details/"+task.id,
              picture:Endpoints.DOTNET_IP+task.taskAssigner+".jpg",
              username: task.taskAssigner
            }
          ];
          this.notifications= notification.concat(this.notifications);
        }
    });


    this.notificationService.listenForComments().subscribe((c: string) => {
      let comment: TaskComment = JSON.parse(c);
      let tmp = [comment];
      if ( (comment.Publisher!=this.user.login) && (comment.to==this.user.login) ){
        this.notificationsCount++;
        this.playAudio(); 
        let notification = [
          {
            text:comment.Content,
            link:"task/details/"+comment.TaskId,
            picture:"http://localhost:18080/universalhaven-web"+comment.Picture,
            username: comment.Publisher
          }
        ];
       
        this.notifications= notification.concat(this.notifications);
      }
    });


  }


  logout(){
    console.log("Logging out");
    this.service.logout();
    this.emitter.emit("");
    
  }

}
