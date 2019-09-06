import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { SharedModule } from '../shared/shared.module';
import { ItemPrestationComponent } from './components/item-prestation/item-prestation.component';
import { PagePrestationAddComponent } from './pages/page-prestation-add/page-prestation-add.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';

@NgModule({
  declarations: [PrestationsComponent, ListPrestationsComponent, ItemPrestationComponent, PagePrestationAddComponent, AddPrestationComponent, FormPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule
  ]
})
export class PrestationsModule { }
