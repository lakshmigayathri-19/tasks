import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Med1Component } from './med1.component';

describe('Med1Component', () => {
  let component: Med1Component;
  let fixture: ComponentFixture<Med1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Med1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Med1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
