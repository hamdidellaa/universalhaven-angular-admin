import { Component,ElementRef,OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from './shared/service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  loggedIn : boolean = false;
  title = 'app';
  public scripts;
 
  user = {};
  ngOnInit(){
    let user = this.service.getUser();
    console.log(user);
    if ( (user!==undefined) && (user!=null) ){
        this.loggedIn=true;
        this.user= JSON.parse(user);
        //this.loadScript();
    }
    
  }
  constructor(private elementRef:ElementRef,public service: UserService) {
    
  }
  loadScript(){
    var s2 = document.createElement("script");
    s2.type = "text/javascript";
    s2.src = "/assets/vendors/jquery/dist/jquery.js";
    this.elementRef.nativeElement.appendChild(s2);
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "/assets/build/js/custom.js";
    this.elementRef.nativeElement.appendChild(s);
    var s1 = document.createElement("script");
    s1.type = "text/javascript";
    s1.src = "/assets/build/js/mailchimp.js";
    this.elementRef.nativeElement.appendChild(s1);
   
    
  }
  ngAfterViewInit() {
    this.loadScript();
  }

  loggedInEventHandler(){
    this.loggedIn=true;
    this.loadScript();
    window.location.reload();
  }

  loggedOut(){
    this.loggedIn=false;
  }

}
