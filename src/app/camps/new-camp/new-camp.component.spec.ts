import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCampComponent } from './new-camp.component';

describe('NewCampComponent', () => {
  let component: NewCampComponent;
  let fixture: ComponentFixture<NewCampComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCampComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
