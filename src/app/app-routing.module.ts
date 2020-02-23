import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'form',
  pathMatch: 'full'
}, {
  path: 'form',
  loadChildren: () => import('./formuli/formuli.module').then(m => m.FormuliModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
