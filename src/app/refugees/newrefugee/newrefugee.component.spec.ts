import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrefugeeComponent } from './newrefugee.component';

describe('NewrefugeeComponent', () => {
  let component: NewrefugeeComponent;
  let fixture: ComponentFixture<NewrefugeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewrefugeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewrefugeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
