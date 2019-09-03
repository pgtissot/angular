import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrestationsComponent } from './pages/prestations/prestations.component';

const appRoutes: Routes = [
  { path: '', component: PrestationsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationsRoutingModule { }
