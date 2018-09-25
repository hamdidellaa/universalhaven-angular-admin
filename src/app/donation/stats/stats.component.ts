import { DonationService } from './../shared/donation.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private service : DonationService) {
      
  }
  chartReady : boolean = false;

  map1Ready : boolean = false;
  map2Ready : boolean = false ;


  public data = [];
  public lineChartData:Array<any> = [
    {data: this.data, label: 'Collected donations'}
  ];
  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  


  public thisyear = 0;
  public thismonth = 0;
  public today = 0;
  public average;

  
  public firstMapDataTable= [ ['Country','Total donations'] ];
  public firstMapData= {
    chartType:'GeoChart',
    dataTable: this.firstMapDataTable,
    options:{
      'region': 'world',
      colorAxis: {colors: ['#c5cae9', '#283593']} // orange to blue
    }
  }
  
  public secondMapDataTable= [ ['Country','Average donated amount'] ];
  public secondMapData= {
    chartType:'GeoChart',
    dataTable: this.secondMapDataTable,
    options:{
      'region': 'world',
      colorAxis: {colors: ['#c5cae9', '#283593']} // orange to blue
    }
  }

  public map_ChartOptions = {};
  ngOnInit() {
      this.service.overallStatsByDate().subscribe(results => {
        this.thismonth= results.thismonth;
        this.thisyear=results.thisyear;
        this.today= results.today;
      },err=>{
        console.log(err);
      });

      this.service.averageDonatedAmount().subscribe(results=>{
          this.average = results.text();
          console.log(results);
      },err=>{

      })

      this.service.averageDonationsPerCountry().subscribe(results=>{
          let that = this;
          Object.keys(results).forEach(function(key){
            that.secondMapDataTable.push([key,results[key]]);
          });
          that.map1Ready=true;
      },err=>{

      })
      this.service.averageDonationsPerCountry().subscribe(results=>{
        let that = this;
        Object.keys(results).forEach(function(key){
          that.firstMapDataTable.push([key,results[key]]);
        })
        that.map2Ready=true;
      },err=>{
        
      })

      this.service.donationsForEachDay().subscribe(results=>{
        let that = this;
        //console.log(results);
        Object.keys(results).forEach(function(key){
          var date= new Date(key);
          that.lineChartLabels.push(date.getDay()+"/"+date.getMonth()+"/"+date.getFullYear());
          that.data.push(results[key]);
        });
        that.chartReady=true;
        console.log(that.lineChartLabels);
        console.log(that.data);
      },err=>{
        console.log(err);
      })
  }

   // events
   public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
