import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyresourceComponent } from './modifyresource.component';

describe('ModifyresourceComponent', () => {
  let component: ModifyresourceComponent;
  let fixture: ComponentFixture<ModifyresourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyresourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyresourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
