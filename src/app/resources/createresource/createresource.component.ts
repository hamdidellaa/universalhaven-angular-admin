import { Router } from '@angular/router';
import { ResourceService } from './../shared/resource.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Resource } from './../../models/resource';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createresource',
  templateUrl: './createresource.component.html',
  styleUrls: ['./createresource.component.css']
})
export class CreateresourceComponent implements OnInit {
  form: FormGroup;
  resource: Resource = new Resource(null, null, null, null, null);
  types = [
    { value: 'MEDICINE', viewValue: 'Medecine' },
    { value: 'FOOD', viewValue: 'Food' },
    { value: 'OTHER', viewValue: 'Other' }
  ];
  constructor(public resourceService: ResourceService, private router: Router) {
    this.form = new FormGroup({
      'name': new FormControl('', [Validators.maxLength(20), Validators.minLength(3), Validators.required]),
      'quantity': new FormControl('', [Validators.required, Validators.min(1), Validators.max(10000)]),
      'type': new FormControl('', [Validators.required]),
      'unit': new FormControl('', [Validators.maxLength(20), Validators.minLength(1), Validators.required]),
      'campId': new FormControl('')
    });
  }

  ngOnInit() {
  }
  addNewResource() {
    console.log(this.resource.type);
    this.resourceService.add(this.resource).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['resource']);
    }, err => {
      console.log(err);
    });
    this.router.navigate(['resource']);
  }
}
