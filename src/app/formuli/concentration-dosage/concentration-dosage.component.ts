import { Component, OnInit } from '@angular/core';
import { BaseDosageComponent } from '../base-dosage/base-dosage.component';
import { FormBuilder } from '@angular/forms';
import { FormulaService } from 'src/app/core/formula.service';

@Component({
  selector: 'app-concentration-dosage',
  templateUrl: './concentration-dosage.component.html',
  styleUrls: ['./concentration-dosage.component.scss']
})
export class ConcentrationDosageComponent extends BaseDosageComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private formulaService: FormulaService) {
    super(formBuilder.group({
      dosage: '',
      weight: '',
      targetDose: '',
      intakes: 3,
    }));
  }

  ngOnInit() {
    super.ngOnInit();
    this.addChangeListener('dosage');
  }

  updateAll(formObject: object): void {
    if (formObject) {
      [this.dailyMl, this.intakeMl] = this.formulaService.compute(
        formObject['dosage'],
        formObject['weight'],
        formObject['targetDose'],
        formObject['intakes']);
    }
  }

}
