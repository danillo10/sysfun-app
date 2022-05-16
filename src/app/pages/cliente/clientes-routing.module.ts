import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

import { ClienteComponent } from './cliente/cliente.component';
import { ClientesPage } from './clientes.page';


const routes: Routes = [
  {
    path: '',
    component: ClientesPage,
    canActivate: [AuthGuard]
  },
  {
    path     : ':id',
    component: ClienteComponent,
    canActivate: [AuthGuard]
  },
  {
    path     : ':id/:formulario',
    component: ClienteComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientePageRoutingModule {}
