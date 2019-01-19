import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { FormuliRoutingModule } from './formuli-routing.module';

import { SpecialtyDosageComponent } from './specialty-dosage/specialty-dosage.component';
import { ConcentrationDosageComponent } from './concentration-dosage/concentration-dosage.component';

@NgModule({
  declarations: [
    SpecialtyDosageComponent,
    ConcentrationDosageComponent,
  ],
  imports: [
    CommonModule,
    FormuliRoutingModule,
    ReactiveFormsModule,
    ClarityModule,
  ]
})
export class FormuliModule { }
