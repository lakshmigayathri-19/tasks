import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Med2Component } from './med2.component';

describe('Med2Component', () => {
  let component: Med2Component;
  let fixture: ComponentFixture<Med2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Med2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Med2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
