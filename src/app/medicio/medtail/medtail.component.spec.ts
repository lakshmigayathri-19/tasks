import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedtailComponent } from './medtail.component';

describe('MedtailComponent', () => {
  let component: MedtailComponent;
  let fixture: ComponentFixture<MedtailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedtailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedtailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
