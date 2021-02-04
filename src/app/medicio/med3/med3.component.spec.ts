import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Med3Component } from './med3.component';

describe('Med3Component', () => {
  let component: Med3Component;
  let fixture: ComponentFixture<Med3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Med3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Med3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
