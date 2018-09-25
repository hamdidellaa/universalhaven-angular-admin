import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraisingeventstatsComponent } from './fundraisingeventstats.component';

describe('FundraisingeventstatsComponent', () => {
  let component: FundraisingeventstatsComponent;
  let fixture: ComponentFixture<FundraisingeventstatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundraisingeventstatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundraisingeventstatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
