import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormuliRoutingModule } from './formuli-routing.module';
import { SpecialtyDosageComponent } from './specialty-dosage/specialty-dosage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConcentrationDosageComponent } from './concentration-dosage/concentration-dosage.component';

@NgModule({
  declarations: [SpecialtyDosageComponent, ConcentrationDosageComponent],
  imports: [
    CommonModule,
    FormuliRoutingModule,
    ReactiveFormsModule,
    ClarityModule,
  ]
})
export class FormuliModule { }
