import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceScrollListComponent } from './resource-scroll-list.component';

describe('ResourceScrollListComponent', () => {
  let component: ResourceScrollListComponent;
  let fixture: ComponentFixture<ResourceScrollListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceScrollListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceScrollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
