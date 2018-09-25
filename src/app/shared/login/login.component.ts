import { Component, OnInit,EventEmitter } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public invalidCredentials : boolean = false;
  constructor(public elementRef: ElementRef,public service: UserService) { }
  public form : FormGroup;
  public login: string;
  public password: string;

  @Output("loginSuccess")
  public emitter: EventEmitter<string>  = new EventEmitter<string>();

  ngOnInit() {
    this.form = new FormGroup({
      "login": new FormControl("",Validators.required),
      "password": new FormControl("",Validators.required)
    });
  }

  loginAction(){
    if (this.form.valid==false){
      return ;
    }
    this.service.login(this.login,this.password).subscribe(resp=> {
      let token = (resp.headers.get("Authorization"));
      console.log("Logged in !  and token is " + token);
      this.service.postLogin(JSON.stringify(resp.json()), token);
      this.emitter.emit(JSON.stringify(resp.json()));
    },err=>{
        this.invalidCredentials=true;
    });


    
  }



 

  
}
