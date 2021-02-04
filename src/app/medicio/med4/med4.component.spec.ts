import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Med4Component } from './med4.component';

describe('Med4Component', () => {
  let component: Med4Component;
  let fixture: ComponentFixture<Med4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Med4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Med4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
