import { UserService } from './../../shared/service/user.service';
import { Camp } from './../../models/camp';
import { FundraisingEvent } from './../../models/fundraisingEvent';
import { FundraisingeventService } from './../shared/services/fundraisingevent.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-updateevent',
  templateUrl: './updateevent.component.html',
  styleUrls: ['./updateevent.component.css']
})
export class UpdateeventComponent implements OnInit {
  id:number;
  data:object = {};
  products = [];
  exist = false;
  productObj:object = {};
  fundraisingEvent:FundraisingEvent;
  camp:Camp;
  urgency:string[]=["HIGH","LOW","MEDIUM"];
  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor(private router: Router, private route: ActivatedRoute, private http: Http
  ,private service:FundraisingeventService) { }

  updateFundraisingEvent(event) {
      this.fundraisingEvent = new FundraisingEvent();
      this.camp=new Camp();
      this.camp.id=event.camp;
      this.fundraisingEvent.id=this.id;
      this.fundraisingEvent.title=event.title;
      this.fundraisingEvent.description=event.description;
      this.fundraisingEvent.goal=event.goal;
      this.fundraisingEvent.state=event.state;
      this.fundraisingEvent.imagePath=event.imagePath;
      this.fundraisingEvent.urgency=event.urgency;
      this.fundraisingEvent.publisher=event.publisher;
      this.fundraisingEvent.camp=this.camp;
      this.service.UpdateEvent(this.fundraisingEvent)
        .toPromise()
        .then(() => {
         this.router.navigate(['/fundraisingEvents']);
        })
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.service.getAll().subscribe(
      events => {
        this.products = events;
        for(var i = 0; i < this.products.length ; i++) {
          if(parseInt(this.products[i].id) === this.id) {
            this.exist = true;
            this.data = this.products[i];
            break;
          } else {
            this.exist = false;
          }
        }
      }
    )
  }

}
