import { Component, OnInit,ElementRef, NgZone, ViewChild } from '@angular/core';
import { Camp } from './../../models/camp';
import { CampService } from './../../camps/services/camp.service';
import { UserService } from './../../shared/service/user.service';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
import { Input } from '@angular/core/src/metadata/directives';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-new-camp',
  templateUrl: './new-camp.component.html',
  styleUrls: ['./new-camp.component.css','./test.scss']
})
export class NewCampComponent implements OnInit {
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;


  @ViewChild("search")
  public searchElementRef: ElementRef;


   newLat : number 
   newLng : number 
  lat: number = 35.824503;
  lng: number = 10.634584;
markers: marker[] = []


clickedMarker(marker:marker ,index:number){
  console.log(marker.name +" lindex est "+ index)
}
mapClicked($event:any){
  var newMarker = {
    name :'untitled',
    lat: $event.coords.lat,
    lng: $event.coords.lng,
    draggable : true
  }
  
  
  this.markers.push(newMarker);
  let index = this.markers.indexOf(newMarker);
  if(index>0){
    this.markers.splice(index-1,1);
  }
  this.newLat = $event.coords.lat;
  this.newLng = $event.coords.lng;
  this.camp.latLng=this.newLat+','+this.newLng;
}
markerDragEnd(marker:any, $event:any){
  console.log('dragEnd',marker,$event)
  var upMarker = {
    name : marker.name,
    lat : parseFloat(marker.lat),
    lng : parseFloat(marker.lng),
    draggable : true
  }
   this.newLat = $event.coords.lat;
   this.newLng = $event.coords.lng;
   console.log("long"+this.newLat)
   this.camp.latLng=this.newLat+','+this.newLng;
}




  campmanagers : any[];
camp :Camp =new Camp();
  constructor(private service:CampService,private userservice:UserService,private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,private router:Router) { 
    this.campmanagers = [];
    
  }


  ngOnInit() {
    //create search FormControl
    this.searchControl = new FormControl();
    
        //set current position
        this.setCurrentPosition();
    
        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
          let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
            types: ["address"]
          });
          autocomplete.addListener("place_changed", () => {
            this.ngZone.run(() => {
              //get the place result
              let place: google.maps.places.PlaceResult = autocomplete.getPlace();
    
              //verify result
              if (place.geometry === undefined || place.geometry === null) {
                return;
              }
    
              //set latitude, longitude and zoom
              this.lat = place.geometry.location.lat();
              this.lng = place.geometry.location.lng();
              
            });
          });
        });
    this.service.FindCampMan().subscribe(rslt => {this.campmanagers =rslt
      console.log(this.campmanagers)
   });
  }
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log(this.searchElementRef)
      });
    }
  }
  saveCamp(){
    
    let user = this.userservice.getUser();
    console.log(user);
    let str =this.searchElementRef.nativeElement.value;
    let users= JSON.parse(user);
    this.camp.campCreator=users.id;
    this.camp.country =str.substr(str.lastIndexOf(",")+2,str.length)
   console.log(this.camp)
   this.service.createCamp(this.camp).subscribe(rslt => {
    swal({
      position: 'top-right',
      type: 'success',
      title: 'Camp has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    this.router.navigate(["Camp"]);
     
  });
  
  }
  

}
//Marker Type
interface marker{
name?:string;
lat : number;
lng : number
draggable :boolean;
}