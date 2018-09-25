import { Component, Input, Output,OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newrefugee',
  templateUrl: './newrefugee.component.html',
  styleUrls: ['./newrefugee.component.css']
})
export class NewrefugeeComponent implements OnInit {
first = true;
second = false;
third = false;
fourth = false;

  constructor() { }

  ngOnInit() {
    
  }
  firststep(test){
    console.log(test)
    this.first =false;
    this.second = true;
  }
 
  

}
