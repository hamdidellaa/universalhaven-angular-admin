import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Camp } from './../../models/camp';
import { UserService } from './../../shared/service/user.service';
import { FundraisingeventService } from './../shared/services/fundraisingevent.service';
import { Http } from '@angular/http';
import { Component, OnInit ,Input} from '@angular/core';
import { FundraisingEvent } from './../../models/fundraisingEvent';
declare var alert;


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: Object = {
    url: 'http://localhost/FileUpload/index.php'
  };
  sizeLimit = 2000000;
 
  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.uploadFile = data;
       //alert('File uploaded');
    }
  }
 
  fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  beforeUpload(uploadingFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('File is too large');
    }
  }

  constructor(private service:FundraisingeventService,private userService:UserService
              ,private router: Router) { }
  user:any={};
  confirmationString:string = "New fundraising event has been added";
  isAdded: boolean = false;
  productObj:object = {};
  fundraisingEvent:FundraisingEvent;
  camp:Camp;
  rForm:FormGroup;
  
  urgency:string[]=["HIGH","LOW","MEDIUM"];
  camps:any[];
  getAllCamps(){
    this.service.getCamps().subscribe(
      camp => {
        this.camps = camp;
      }
    )
  }
  addNewFundraisingEvent(event) {
    if(this.user==null){
      this.router.navigate(['/login']);

    }else{
      this.fundraisingEvent = new FundraisingEvent();
    this.camp=new Camp();
    this.camp.id=event.camp;
    this.fundraisingEvent.title=event.title;
    this.fundraisingEvent.description=event.description;
    this.fundraisingEvent.goal=event.goal;
    this.fundraisingEvent.imagePath=this.uploadFile.generatedName;
    this.fundraisingEvent.urgency=event.urgency;
    this.fundraisingEvent.publisher=this.user.id;
    this.fundraisingEvent.camp=this.camp;
    this.service.addEvent(this.fundraisingEvent).subscribe((res) => {
      this.isAdded = true;
    })

    }
    
  }
  log(x){
    console.log(x);
  }


  ngOnInit() {
    this.getAllCamps();
    this.user= JSON.parse(this.userService.getUser());
  }

}
