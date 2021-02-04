import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Med7Component } from './med7.component';

describe('Med7Component', () => {
  let component: Med7Component;
  let fixture: ComponentFixture<Med7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Med7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Med7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
