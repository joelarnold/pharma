import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConcentrationDosageComponent } from './concentration-dosage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

describe('ConcentrationDosageComponent', () => {
  let component: ConcentrationDosageComponent;
  let fixture: ComponentFixture<ConcentrationDosageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ClarityModule,
      ],
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
