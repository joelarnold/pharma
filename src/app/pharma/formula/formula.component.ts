import { Component, OnInit } from '@angular/core';
import { Specialty } from 'src/app/core/specialty.model';
import { SpecialtyService } from 'src/app/core/specialty.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { updateBinding } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.scss']
})
export class FormulaComponent implements OnInit {

  form: FormGroup;
  currentMgPerMl: number;
  dailyMl: number;
  intakeMl: number;

  constructor(private formBuilder: FormBuilder, private specialtyService: SpecialtyService) {
    this.form = this.formBuilder.group({
      mgPerMl: specialtyService.getSpecialties()[0].mgPerMl,
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
    this.compute(
      this.form.get('mgPerMl').value, this.form.get('weight').value, this.form.get('targetDose').value, this.form.get('intakes').value);
  }

  private compute(mgPerMl, weight, targetDose, intakes) {
    this.currentMgPerMl = mgPerMl;
    this.dailyMl = this.round(weight * targetDose * (1 / mgPerMl), 2);
    this.intakeMl = this.round(this.dailyMl / intakes, 2);
  }

  private round(value: number, digits: number) {
    return Math.round(Math.pow(10, digits) * value) / Math.pow(10, digits);
  }

}
