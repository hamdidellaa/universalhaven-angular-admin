import { Component, OnInit } from '@angular/core';
import { Mail } from './../../models/mail';
import { ServiceMailService } from './../../mails/services/service-mail.service';
import { element } from 'protractor';
import { Http} from '@angular/http';

@Component({
  selector: 'app-allmail',
  templateUrl: './allmail.component.html',
  styleUrls: ['./allmail.component.css']
})
export class AllmailComponent implements OnInit {
  titles : any[];
  constructor(private service:ServiceMailService) {
    this.titles = [];
   }

  ngOnInit() {
   
      this.service.get("https://us17.api.mailchimp.com/3.0/lists/7bead1c99a/members").subscribe(result => {
        console.log( result );
    });
          // console.log( result );
      
    this.service.getMail().subscribe( mail=>{this.titles=mail,console.log(this.titles)});
  }

}
