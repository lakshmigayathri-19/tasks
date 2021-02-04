import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedmergeComponent } from './medmerge.component';

describe('MedmergeComponent', () => {
  let component: MedmergeComponent;
  let fixture: ComponentFixture<MedmergeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedmergeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedmergeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
