import { ResourceService } from './../shared/resource.service';
import { Resource } from './../../models/resource';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resource-item',
  templateUrl: './resource-item.component.html',
  styleUrls: ['./resource-item.component.scss']
})
export class ResourceItemComponent implements OnInit {
  @Output()
  ondelete = new EventEmitter<number>();
  @Output()
  onedit = new EventEmitter<number>();
  @Input()
  resource: Resource;
  @Input()
  indice: number;
  constructor(public resourceService: ResourceService) { }

  ngOnInit() {
  }
  delete(id: number) {

    console.log("indice:" + this.indice);
    this.ondelete.emit(this.indice);
    this.resourceService.delete(id).toPromise()
      .then(() => {
        this.resourceService.getAll();

      });
    this.ondelete.emit(this.indice);
  }
}
