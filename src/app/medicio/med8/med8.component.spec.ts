import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Med8Component } from './med8.component';

describe('Med8Component', () => {
  let component: Med8Component;
  let fixture: ComponentFixture<Med8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Med8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Med8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
