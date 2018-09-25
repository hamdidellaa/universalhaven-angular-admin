import { FundraisingeventService } from './../shared/services/fundraisingevent.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit {
  event:any;
  amountRecolted:number;
  avg:number;

  constructor(private route:ActivatedRoute,private service:FundraisingeventService) { }
  avgRecoltedMoney(s:number):number{
   return this.amountRecolted*100;

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this.service.getById(id)
      .subscribe(detailEvent=>this.event=detailEvent);
      this.service.getSumAmountDonationByEvent(id)
      .subscribe(amount=>this.amountRecolted=amount);
    }); 
   //this.avg= this.avgRecoltedMoney(100);
   this.avg=(this.amountRecolted*100);

  }

}
