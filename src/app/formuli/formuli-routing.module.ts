import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialtyDosageComponent } from './specialty-dosage/specialty-dosage.component';
import { ConcentrationDosageComponent } from './concentration-dosage/concentration-dosage.component';

const routes: Routes = [{
  path: 'spec',
  component: SpecialtyDosageComponent
}, {
  path: 'conc',
  component: ConcentrationDosageComponent
}, {
  path: '',
  redirectTo: 'spec'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormuliRoutingModule { }
