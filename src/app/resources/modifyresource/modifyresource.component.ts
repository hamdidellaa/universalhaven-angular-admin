import { Resource } from './../../models/resource';
import { Router, ActivatedRoute } from '@angular/router';
import { ResourceService } from './../shared/resource.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifyresource',
  templateUrl: './modifyresource.component.html',
  styleUrls: ['./modifyresource.component.css']
})
export class ModifyresourceComponent implements OnInit {
  resource: Object = {};
  data: Resource = new Resource(null, null, null, null, null);
  id: number;
  constructor(private resourceService: ResourceService, private router: Router, private route: ActivatedRoute) { }
  types = ["Food", "Medicine", "Other"];
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.resourceService.getOne(this.id).subscribe(resp => {
      console.log(resp);
      console.log(this.data + "before data");
      this.data = resp;
      console.log(this.data + "data here");
    }, err => {
      console.log(err);
    });
  }
  updateResource(resource) {
    console.log(this.id);
    this.resource = {
      "id": this.id,
      "name": resource.name,
      "quantity": resource.quantity,
      "type": resource.type,
      "unit": resource.unit
    };
    console.log(this.resource);
    this.resourceService.update(this.resource, this.id).subscribe();

    this.router.navigate(['resource']);
     /* resp => {
      console.log(resp);
      this.router.navigate(['resource']);
      console.log(this.router);
    }, err => {
      console.log(err);
    }*/
  
  }


}
