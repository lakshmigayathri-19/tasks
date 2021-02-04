import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedheadComponent } from './medhead.component';

describe('MedheadComponent', () => {
  let component: MedheadComponent;
  let fixture: ComponentFixture<MedheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
