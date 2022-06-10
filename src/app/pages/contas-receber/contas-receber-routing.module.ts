
import { ContasReceberPage } from './contas-receber.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiquidarContaComponent } from './liquidar-conta/liquidar-conta.component';
import { ContaReceberComponent } from './contas-receber/conta-receber.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';
import { FiltroContasComponent } from './filtro/filtro.contas.component';

const routes: Routes = [
  {
    path: '',
    component: ContasReceberPage,
    canActivate: [AuthGuard]
  },
  {
    path     : ':id',
    component: ContaReceberComponent,
    canActivate: [AuthGuard]
  },
  {
    path     : ':id/:formulario',
    component: ContaReceberComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContasReceberPageRoutingModule {}
