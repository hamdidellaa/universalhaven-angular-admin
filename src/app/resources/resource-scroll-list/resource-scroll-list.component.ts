import { Resource } from './../../models/resource';
import { Component, OnChanges, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ChangeEvent } from 'angular2-virtual-scroll';

@Component({
  selector: 'app-resource-scroll-list',
  templateUrl: './resource-scroll-list.component.html',
  styleUrls: ['./resource-scroll-list.component.scss']
})
export class ResourceScrollListComponent implements OnChanges {

  constructor() { }
  @Input()
  items: Resource[];
  scrollItems: Resource[];
  @Output() getId = new EventEmitter<number>();
  indices: ChangeEvent;
  buffer: Resource[] = [];
  readonly bufferSize: number = 10;
  timer;
  loading: boolean;
  ngOnChanges(changes: SimpleChanges) {
    this.reset();
  }

  reset() {
    this.fetchNextChunk(0, this.bufferSize, {}).then(chunk => this.buffer = chunk);
  }

  fetchMore(event: ChangeEvent) {
    this.indices = event;
    if (event.end === this.buffer.length) {
      this.loading = true;
      this.fetchNextChunk(this.buffer.length, this.bufferSize, event).then(chunk => {
        this.buffer = this.buffer.concat(chunk);
        this.loading = false;
      }, () => this.loading = false);
    }
  }

  fetchNextChunk(skip: number, limit: number, event?: any): Promise<Resource[]> {
    return new Promise((resolve, reject) => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        if (skip < this.items.length) {
          return resolve(this.items.slice(skip, skip + limit));
        }
        reject();
      }, 1000 + Math.random() * 1000);
    });
  }
  deleteResource(id:number) {
        this.scrollItems.splice(id,1);
        this.items.splice(id,1);
        this.reset();
       console.log(id);
       console.log("click");
   }

}
