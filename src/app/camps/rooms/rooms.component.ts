import { Component, OnInit } from '@angular/core';
import { Camp } from './../../models/camp';
import { Room } from './../../models/room';
import { CampService } from './../../camps/services/camp.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2'
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  room :Room =new Room();
  camps : any[];
  constructor(private service:CampService,private router:Router) {
    this.camps = []; 
  }

  ngOnInit() {
    this.service.getAllCamps().subscribe(rslt => {this.camps =rslt
      console.log(this.camps)
   });
  }
  saveRoom(){
    console.log(this.room.campId)
    this.room.remainingbeds= this.room.beds;
    this.service.createRoom(this.room).subscribe(rslt => {
      console.log(rslt)
      console.log(rslt)
      swal({
        position: 'top-right',
        type: 'success',
        title: 'Room has been saved',
        showConfirmButton: false,
        timer: 1500
      })
    this.router.navigate(["Camp"]);
    
    });
  }
}
