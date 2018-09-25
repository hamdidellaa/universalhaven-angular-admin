import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebarmenuprofile',
  templateUrl: './sidebarmenuprofile.component.html',
  styleUrls: ['./sidebarmenuprofile.component.css']
})
export class SidebarmenuprofileComponent implements OnInit {
  @Input()
  public user = {};
  constructor() { }

  ngOnInit() {
  }

}
