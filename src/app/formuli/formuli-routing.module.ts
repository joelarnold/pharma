import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpecialtyDosageComponent } from './specialty-dosage/specialty-dosage.component';

const routes: Routes = [{
  path: '',
  component: SpecialtyDosageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormuliRoutingModule { }
