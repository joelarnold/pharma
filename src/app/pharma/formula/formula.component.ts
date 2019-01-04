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

  form: FormGroup;
  dailyMl: number;
  intakeMl: number;

  constructor(private formBuilder: FormBuilder, private specialtyService: SpecialtyService, private formulaService: FormulaService) {
    const firstSpecialty = specialtyService.getSpecialties()[0];
    this.form = this.formBuilder.group({
      mgPerMl: firstSpecialty.mgPerMl,
      weight: [35],
      targetDose: [15],
      intakes: [3],
    });
  }

  ngOnInit() {
    this.update();
    this.form.valueChanges.subscribe(() => {
      this.update();
    });
  }

  update() {
    this.formulaService.compute(
      this.form.get('mgPerMl').value, this.form.get('weight').value, this.form.get('targetDose').value, this.form.get('intakes').value);
  }

}
