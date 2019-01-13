import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormuliRoutingModule } from './formuli-routing.module';
import { SpecialtyDosageComponent } from './specialty-dosage/specialty-dosage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [SpecialtyDosageComponent],
  imports: [
    CommonModule,
    FormuliRoutingModule,
    ReactiveFormsModule,
    ClarityModule,
  ]
})
export class FormuliModule { }
