import { FundraisingeventService } from './../shared/services/fundraisingevent.service';
import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { FundraisingEvent } from './../../models/fundraisingEvent';

@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  styleUrls: ['./allevents.component.css']
})
export class AlleventsComponent implements OnInit {
  events:FundraisingEvent []= [];
  constructor(private http: Http, private service:FundraisingeventService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      events=>this.events=events);
    
  }

}
