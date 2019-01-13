import { Component, OnInit } from '@angular/core';
import { Specialty } from 'src/app/core/specialty.model';
import { SpecialtyService } from 'src/app/core/specialty.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormulaService } from 'src/app/core/formula.service';

@Component({
  selector: 'app-specialty-dosage',
  templateUrl: './specialty-dosage.component.html',
  styleUrls: ['./specialty-dosage.component.scss']
})
export class SpecialtyDosageComponent implements OnInit {

  specialties: Specialty[];
  form: FormGroup;
  dailyMl: number;
  intakeMl: number;

  constructor(private formBuilder: FormBuilder, private specialtyService: SpecialtyService, private formulaService: FormulaService) {
    this.specialties = specialtyService.getSpecialties();
    this.form = this.formBuilder.group({
      specialty: '',
      weight: '',
      targetDose: '',
      intakes: 3,
    });
  }

  ngOnInit() {
    this.updateAll(this.form.value);
    this.form.get('specialty').valueChanges.subscribe((specialty) => {
      this.updateSpecialty(specialty);
    });
    this.form.get('weight').valueChanges.subscribe((weight) => {
      this.updateWeight(weight);
    });
    this.form.get('targetDose').valueChanges.subscribe((targetDose) => {
      this.updateTargetDose(targetDose);
    });
    this.form.get('intakes').valueChanges.subscribe((intakes) => {
      this.updateIntakes(intakes);
    });
  }

  updateSpecialty(specialty: Specialty) {
    if (specialty) {
      const currentForm = this.form.value;
      currentForm['specialty'] = specialty;
      currentForm['targetDose'] = specialty.standardDose;
      this.form.get('targetDose').setValue(specialty.standardDose);
      this.updateAll(currentForm);
    }
  }
  updateWeight(weight: number) {
    if (weight) {
      const currentForm = this.form.value;
      currentForm['weight'] = weight;
      this.updateAll(currentForm);
    }
  }
  updateTargetDose(targetDose: number) {
    if (targetDose) {
      const currentForm = this.form.value;
      currentForm['targetDose'] = targetDose;
      this.updateAll(currentForm);
    }
  }
  updateIntakes(intakes: number) {
    if (intakes) {
      const currentForm = this.form.value;
      currentForm['intakes'] = intakes;
      this.updateAll(currentForm);
    }
  }

  updateAll(formObject: object) {
    if (formObject) {
      [this.dailyMl, this.intakeMl] = this.formulaService.compute(
        formObject['specialty'].mgPerMl,
        formObject['weight'],
        formObject['targetDose'],
        formObject['intakes']);
    }
  }

}
