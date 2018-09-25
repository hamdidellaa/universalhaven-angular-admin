import { Http } from '@angular/http';
import { FundraisingeventService } from './../shared/services/fundraisingevent.service';
import { Component, OnInit } from '@angular/core';
import { ChartReadyEvent } from 'ng2-google-charts';
import { ChartErrorEvent } from 'ng2-google-charts';
import { ChartSelectEvent } from 'ng2-google-charts';
import { ChartMouseOverEvent, ChartMouseOutEvent } from 'ng2-google-charts';

@Component({
  selector: 'app-fundraisingeventstats',
  templateUrl: './fundraisingeventstats.component.html',
  styleUrls: ['./fundraisingeventstats.component.css']
})
export class FundraisingeventstatsComponent implements OnInit {

  data = [ ['Country','Number of events'] ];
  stat=[];
  data2 = [ ['Month','Number of events'] ];
  stat2=[];
  constructor(private http: Http,private serviceEvent:FundraisingeventService) { }

  ngOnInit() {
    this.serviceEvent.getStats().subscribe(stat=>{
        this.stat=stat;
        
         Object.keys(this.stat).forEach(value=>{
          this.data.push([value,this.stat[value]]);
        })

        this.serviceEvent.getEventByMonthThisYear().subscribe(stat=>{
        this.stat2=stat;

        Object.keys(this.stat2).forEach(value=>{
          this.data2.push([value,this.stat2[value]]);
        })
         })

      })
  }
    GeoChartData =  {
      chartType: 'GeoChart',
      dataTable:  this.data,
     options: {'title': 'Geo chart'},
    };
    public columnChartData:any =  {
      chartType: 'ColumnChart',
      dataTable: this.data2,
      options: {title: 'Number of events'}
    };

}
