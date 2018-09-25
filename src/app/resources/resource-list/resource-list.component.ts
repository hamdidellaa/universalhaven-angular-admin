import { Resource } from './../../models/resource';
import { ResourceService } from './../shared/resource.service';
import { UserService } from './../../shared/service/user.service';
import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss'],
  encapsulation: ViewEncapsulation.None  
})
export class ResourceListComponent implements OnInit {
  resources: Resource[] = [];

  constructor(public userService: UserService, public resourceService: ResourceService) {
  
    this.resourceService.getAll().subscribe(res => { this.resources = res; });
  }

  ngOnInit() {
  }
}
