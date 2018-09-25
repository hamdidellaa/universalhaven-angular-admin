import { Component, OnInit,ViewChild } from '@angular/core';
import { Camp } from './../../models/camp';
import { CampService } from './../../camps/services/camp.service';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import swal from 'sweetalert2'
@Component({
  selector: 'app-camps',
  templateUrl: './camps.component.html',
  styleUrls: ['./camps.component.css']
})
export class CampsComponent implements OnInit {
  newLat : number 
  newLng : number 
  rows =[]
  temp = []
  selected=[]
 lat: number = 35.824503;
 lng: number = 10.634584;
 @ViewChild(DatatableComponent) table: DatatableComponent;
markers: marker[] = [
  {
    name :"Camp Charity",
    lat: 35.86324849139593,
  lng: 10.59271095553413
 
  },
];
  countries : any[];
  camps : any[];
  campsroom :any[];
  countrynumber :number;
  campsnumber : number;
  malesnumber : number;
  femalesnumber : number;
  rmale:number;
  rfemale:number;
  rfamilies:number;
  rcouple:number;
  allrefugee:number;
  roomnumber :number;
  constructor(private service:CampService) {
    this.countries = [];
    this.campsnumber =0;
    this.countrynumber =0;
    this.malesnumber =0;
    this.femalesnumber =0 ;
    this.rcouple=0;
    this.rmale = 0;
    this.rfemale = 0;
    this.rfamilies=0;
    this.roomnumber=0;
    this.camps = [];
    this.campsroom =[];
    this.allrefugee =this.malesnumber +this.femalesnumber;
    
   }

  ngOnInit() {
    this.service.countAllCampsPerCountry().subscribe(result => {this.countries=result
 
  for(var key in this.countries) {
      this.countrynumber = this.countrynumber + 1;
      this.campsnumber = this.campsnumber + this.countries[key];
}
});
this.service.getallcampspercountry().subscribe(camp => {
  for(var key in camp) {
    for (var subItem in camp[key])
    this.camps.push(camp[key][subItem]);
    this.rows.push(camp[key][subItem]);
    this.temp.push(camp[key][subItem]);
  }
  console.log(this.camps)
});
this.service.getallcampspercountry().subscribe(camp => {
  let latitude=""
  let longitude=""
  let names=""
  for(var key in camp) {
    for (var subItem in camp[key]){
      var str =camp[key][subItem]["latLng"];
      names = camp[key][subItem]["name"];
      latitude = str.substring(0,str.indexOf(','))
      longitude = str.substring(str.indexOf(',')+1)
      var newmarker ={
        name : names,
        lat : parseFloat(latitude),
        lng : parseFloat(longitude)
      }
      this.markers.push(newmarker)
  }
  }
  
});



this.service.GetRefugeePergender("male").subscribe(male => {this.femalesnumber=male
});

this.service.GetAllRoom().subscribe(reslt => {reslt
  for(var key in reslt) {
    this.campsroom.push(reslt[key]["Type"]);
  }
  var xxs =0;
  for(var i =0 ;i < this.campsroom.length;i++){
    if(this.campsroom[i]=='0'){
      this.rcouple=this.rcouple+1
    }
    if(this.campsroom[i]=='1'){
      this.rmale=this.rmale+1
    }
    if(this.campsroom[i]=='2'){
      this.rfemale=this.rfemale+1
    }
    if(this.campsroom[i]=='3'){
      this.rfamilies=this.rfamilies+1
    }

}
console.log("xxs"+this.rfemale )
  });
  this.service.GetRefugeePergender("female").subscribe(male => {this.malesnumber=male
  });
  console.log("xxsssss"+this.rfemale )
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    this.rows = temp;
    this.table.offset = 0;
  }
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }
 

}
interface marker{
  name?:string;
  lat : number;
  lng : number
  }