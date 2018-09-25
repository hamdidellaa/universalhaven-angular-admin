import { TasknotificationserviceService } from './../shared/services/tasknotificationservice.service';
import { Router } from '@angular/router';
import { Task } from './../../models/task';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { UserService } from '../../shared/service/user.service';
import { TaskService } from '../shared/services/taskservice';
import { Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent implements OnInit {
  form : FormGroup ;
  task : Task = new Task();
  userList: any[] = [];
  usersLoaded : boolean = false;
  adding : boolean = false;
  constructor(private serviceUser: UserService,private serviceTask : TaskService,private router: Router,
    public snackBar: MatSnackBar,private notification: TasknotificationserviceService) {
    this.form = new FormGroup({
      'description': new FormControl('',Validators.required),
      'deadline': new FormControl('',Validators.required),
      'taskExecutor': new FormControl('',Validators.required),
      'priority' : new FormControl('',Validators.required)
    });
  }

 

  ngOnInit() {
    this.serviceUser.getCampStaff().subscribe(users=>{
      users.forEach(element=>{
        if (element.role=="CAMP_STAFF"){
          this.userList.push(element);
          
        }
      })
      this.usersLoaded=true;
    },err=>{
      console.log(err);
    })
  }

  addTask(){
   
    if (this.form.valid==false) {
        return;
    }
    this.adding=true;
    this.userList.forEach(element => {
        if (element.login==this.task.TaskExecutorId){
          this.task.TaskExecutorId= element.id;
        }
    });
    console.log(this.task);
    
    this.serviceTask.addTask(this.task).subscribe(resp=>{
      console.log(resp);
      this.snackBar.open("Task was created", "Close", {
        duration: 2000,
      });
      this.notification.sendNewTaskNotification(resp);
      //this.serviceTask.notify(this.task.TaskExecutorId);
      this.router.navigate(["task"]);
    },err=>{
      console.log(err);
    });
  }
  chosePriority(number){
      console.log(number);
      this.task.Priority=number;
      this.form.patchValue({"priority":number});
  }
}
