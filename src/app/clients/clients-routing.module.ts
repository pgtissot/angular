import { NgModule } from '@angular/core';
import { ClientsComponent } from './pages/clients/clients.component';
import { RouterModule, Routes } from '@angular/router';
import { PageClientAddComponent } from './pages/page-client-add/page-client-add.component';

const appRoutes: Routes = [
  { path: '', component: ClientsComponent },
  { path: 'add', component: PageClientAddComponent },
  // { path: 'update/:id', component: PageClientUpdateComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ClientsRoutingModule { }
