import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefugeeComponent } from './refugee.component';

describe('RefugeeComponent', () => {
  let component: RefugeeComponent;
  let fixture: ComponentFixture<RefugeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefugeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefugeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
