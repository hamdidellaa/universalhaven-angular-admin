import { TasknotificationserviceService } from './../shared/services/tasknotificationservice.service';
import { UserService } from './../../shared/service/user.service';
import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/services/taskservice';
import { DragulaService } from 'ng2-dragula';
import { Task } from '../../models/task';

@Component({
  selector: 'app-alltasks',
  templateUrl: './alltasks.component.html',
  styleUrls: ['./alltasks.component.css']
})
export class AlltasksComponent implements OnInit {

  constructor(private taskService: TaskService, private userService: UserService, private serviceDragula: DragulaService,
    private notification: TasknotificationserviceService) { }
  public tasks: any = {};
  public initialTasks: any = {};
  public deletable: boolean = false;
  loading: boolean = true;
  user: any = {};
  private audio;
  playAudio() {
    this.audio = new Audio();
    this.audio.src = "../../../assets/sounds/notif.mp3";
    this.audio.load();
    this.audio.play();
  }
  ngOnInit() {
    let that = this;
    this.notification.listenForNewTasks().subscribe((t: string) => {
      let task: Task = JSON.parse(t);
      console.log(task);
      if (task.taskExecutor == this.user.login) {
        this.playAudio();
        let tmp = [task];
        that.tasks.pending = tmp.concat(this.tasks.pending);
      }
    })

    let userJson = this.userService.getUser();

    if (userJson != null) {

      let user = JSON.parse(userJson);
      this.user = user;
      if (user.role == "CAMP_MANAGER") {
        this.deletable = true;
      }
      this.taskService.getTasksByUser(user.id).subscribe(res => {
        console.log(res);

        this.tasks = res;
        this.initialTasks = res;
        this.loading = false;
      }, err => {

      })
    }

    this.serviceDragula.drop.subscribe(val => {
      var id = (val[1].id);
      var to = (val[2].id);
      var from = (val[3].id);
      console.log(id);
      this.moveTask(id, from, to);
    })
  }

  moveTask(id, from, to) {
    let fromArray = [];
    let toArray = [];
    if (from == "pending") {
      fromArray = this.tasks.pending;
    }
    else if (from == "doing") {
      fromArray = this.tasks.doing;
    }
    else if (from == "done") {
      fromArray = this.tasks.done;
    }
    else {
      fromArray = this.tasks.declined;
    }
    if (to == "pending") {
      toArray = this.tasks.pending;
    }
    else if (to == "doing") {
      toArray = this.tasks.doing;
    }
    else if (to == "done") {
      toArray = this.tasks.done;
    }
    else {
      toArray = this.tasks.declined;
    }
    let task = new Task();
    for (var i = 0; i < fromArray.length; i++) {
      if (fromArray[i].id == id) {
        task = fromArray[i];
      }
    }
    this.taskService.updateTaskStatus(task, to).subscribe(resp => {
      fromArray.splice(fromArray.indexOf(task), 1);
      toArray.push(task);
    }, err => {

    })



  }

  deleteTask(task) {
    console.log(task);
    this.taskService.removeTask(task).subscribe(resp => {
      var toDeleteFrom = (this.tasks[task.status.toLowerCase()]);
      toDeleteFrom.splice(toDeleteFrom.indexOf(task), 1);
    }, err => {

    })
  }


  search(keyword: string) {
    if (keyword.length < 3) {
      if (keyword == "") {
        this.tasks = this.initialTasks;
      }
      return;
    }
    var results = { pending: [], doing: [], done: [], declined: [] };
    let that = this;
    this.initialTasks.pending.forEach(element => {
      if (element.description.toLowerCase().indexOf(keyword.toLowerCase()) != -1) {
        results.pending.push(element);
      }
    });
    this.initialTasks.doing.forEach(element => {
      if (element.description.toLowerCase().indexOf(keyword.toLowerCase()) != -1) {
        results.doing.push(element);
      }
    });
    this.initialTasks.done.forEach(element => {
      if (element.description.toLowerCase().indexOf(keyword.toLowerCase()) != -1) {
        results.done.push(element);
      }
    });
    this.initialTasks.declined.forEach(element => {
      if (element.description.toLowerCase().indexOf(keyword.toLowerCase()) != -1) {
        results.declined.push(element);
      }
    });

    this.tasks = results;

  }

}
