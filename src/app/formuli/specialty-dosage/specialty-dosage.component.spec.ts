import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SpecialtyDosageComponent } from './specialty-dosage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

describe('SpecialtyDosageComponent', () => {
  let component: SpecialtyDosageComponent;
  let fixture: ComponentFixture<SpecialtyDosageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ClarityModule,
      ],
      declarations: [ SpecialtyDosageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtyDosageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
