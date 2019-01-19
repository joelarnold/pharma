import { Component, OnInit } from '@angular/core';
import { Specialty } from 'src/app/core/specialty.model';
import { SpecialtyService } from 'src/app/core/specialty.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormulaService } from 'src/app/core/formula.service';
import { BaseDosageComponent } from '../base-dosage/base-dosage.component';

@Component({
  selector: 'app-specialty-dosage',
  templateUrl: './specialty-dosage.component.html',
  styleUrls: ['./specialty-dosage.component.scss']
})
export class SpecialtyDosageComponent extends BaseDosageComponent implements OnInit {

  specialties: Specialty[];

  constructor(private formBuilder: FormBuilder, private specialtyService: SpecialtyService, private formulaService: FormulaService) {
    super(formBuilder.group({
      specialty: '',
      weight: '',
      targetDose: '',
      intakes: 3,
    }));
    this.specialties = specialtyService.getSpecialties();
  }

  ngOnInit() {
    super.ngOnInit();
    this.form.get('specialty').valueChanges.subscribe((specialty) => {
      if (specialty) {
        const currentForm = this.form.value;
        currentForm['specialty'] = specialty;
        currentForm['targetDose'] = specialty.standardDose;
        this.form.get('targetDose').setValue(specialty.standardDose);
        this.updateAll(currentForm);
      }
    });
  }

  updateAll(formObject: object): void {
    if (formObject) {
      [this.dailyMl, this.intakeMl] = this.formulaService.compute(
        formObject['specialty'].mgPerMl,
        formObject['weight'],
        formObject['targetDose'],
        formObject['intakes']);
    }
  }

}
