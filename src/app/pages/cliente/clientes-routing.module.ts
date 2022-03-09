import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClienteComponent } from './cliente/cliente.component';
import { ClientesComponent } from './clientes.page';


const routes: Routes = [
  {
    path: '',
    component: ClientesComponent
  },
  {
    path     : ':id',
    component: ClienteComponent
  },
  {
    path     : ':id/:formulario',
    component: ClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientePageRoutingModule {}
