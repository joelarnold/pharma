import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcentrationDosageComponent } from './concentration-dosage.component';

describe('ConcentrationDosageComponent', () => {
  let component: ConcentrationDosageComponent;
  let fixture: ComponentFixture<ConcentrationDosageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcentrationDosageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcentrationDosageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
