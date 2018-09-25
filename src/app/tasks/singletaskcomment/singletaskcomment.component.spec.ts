import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletaskcommentComponent } from './singletaskcomment.component';

describe('SingletaskcommentComponent', () => {
  let component: SingletaskcommentComponent;
  let fixture: ComponentFixture<SingletaskcommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingletaskcommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletaskcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
