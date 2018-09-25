import { UserService } from './../../shared/service/user.service';
import { FundraisingeventService } from './../shared/services/fundraisingevent.service';
import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { FundraisingEvent } from './../../models/fundraisingEvent';
@Component({
  selector: 'app-myevents',
  templateUrl: './myevents.component.html',
  styleUrls: ['./myevents.component.css']
})
export class MyeventsComponent implements OnInit {
  events:FundraisingEvent []= [];
  user:any={};
  constructor(private http: Http, private service:FundraisingeventService,private userService:UserService) { }

  ngOnInit() {
    this.user= JSON.parse(this.userService.getUser());
    this.service.getMyEvents(this.user.id).subscribe(
      events=>this.events=events);
    
  }

}
