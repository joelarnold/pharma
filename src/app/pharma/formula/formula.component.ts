import { Component, OnInit } from '@angular/core';
import { Specialty } from 'src/app/core/specialty.model';
import { SpecialtyService } from 'src/app/core/specialty.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { updateBinding } from '@angular/core/src/render3/instructions';
import { FormulaService } from 'src/app/core/formula.service';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.scss']
})
export class FormulaComponent implements OnInit {

  specialties: Specialty[];
  form: FormGroup;
  dailyMl: number;
  intakeMl: number;

  constructor(private formBuilder: FormBuilder, private specialtyService: SpecialtyService, private formulaService: FormulaService) {
    this.specialties = specialtyService.getSpecialties();
    this.form = this.formBuilder.group({
      specialty: this.specialties[0],
      weight: '',
      targetDose: 15,
      intakes: 3,
    });
  }

  ngOnInit() {
    this.update(this.form.value);
    this.form.valueChanges.subscribe((formObject) => {
      this.update(formObject);
    });
  }

  update(formObject: object) {
    if (formObject) {
      [this.dailyMl, this.intakeMl] = this.formulaService.compute(
        formObject['specialty'].mgPerMl,
        formObject['weight'],
        formObject['targetDose'],
        formObject['intakes']);
    }
  }

}
