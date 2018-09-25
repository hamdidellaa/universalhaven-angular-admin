import { TaskService } from './../shared/services/taskservice';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskstats',
  templateUrl: './taskstats.component.html',
  styleUrls: ['./taskstats.component.css']
})
export class TaskstatsComponent implements OnInit {

  constructor(private service : TaskService) { }
   // Doughnut
   public timedoughnutChartLabels:string[] = ['On time', 'After deadline'];
   public timedoughnutChartData:number[] = [0, 0];
   public timedoughnutChartType:string = 'doughnut';

  // Status
   // Doughnut
   public statusdoughnutChartLabels:string[] = ['Pending','Doing','Done','Declined'];
   public statusdoughnutChartData:number[] = [0,0,0,0];
   public statusdoughnutChartType:string = 'doughnut';

  public loaded = false;

   stats : any;
  ngOnInit() {
    this.service.getStats().subscribe(stats=>{
        
        this.stats= stats;
       
        this.statusdoughnutChartData= [this.stats.pending,this.stats.doing,this.stats.done,this.stats.declined];
        this.timedoughnutChartData = [this.stats.ontime,this.stats.afterdeadline];
        this.loaded=true;
    },err=>{

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
