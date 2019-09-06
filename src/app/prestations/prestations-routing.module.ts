import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { PagePrestationAddComponent } from './pages/page-prestation-add/page-prestation-add.component';

const appRoutes: Routes = [
  { path: '', component: PrestationsComponent },
  { path: 'add', component: PagePrestationAddComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationsRoutingModule { }
