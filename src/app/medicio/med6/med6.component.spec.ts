import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Med6Component } from './med6.component';

describe('Med6Component', () => {
  let component: Med6Component;
  let fixture: ComponentFixture<Med6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Med6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Med6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
