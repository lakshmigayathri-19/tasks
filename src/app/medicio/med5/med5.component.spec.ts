import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Med5Component } from './med5.component';

describe('Med5Component', () => {
  let component: Med5Component;
  let fixture: ComponentFixture<Med5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Med5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Med5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
