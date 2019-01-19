import { OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

export abstract class BaseDosageComponent implements OnInit {

  dailyMl: number;
  intakeMl: number;

  constructor(public form: FormGroup) {
  }

  ngOnInit() {
    this.updateAll(this.form.value);
    this.addChangeListener('weight');
    this.addChangeListener('targetDose');
    this.addChangeListener('intakes');
  }

  addChangeListener(field: string): void {
    this.form.get(field).valueChanges.subscribe((value) => {
      const currentForm = this.form.value;
      currentForm[field] = value;
      this.updateAll(currentForm);
    });
  }

  abstract updateAll(formObject: object): void;

}
