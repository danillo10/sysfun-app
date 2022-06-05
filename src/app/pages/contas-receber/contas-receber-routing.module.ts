
import { ContasReceberComponent } from './contas-receber.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiquidarContaComponent } from './liquidar-conta/liquidar-conta.component';
import { ContaReceberComponent } from './contas-receber/conta-receber.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ContasReceberComponent,
    canActivate: [AuthGuard]
  },
  {
    path     : ':new',
    component: LiquidarContaComponent,
    canActivate: [AuthGuard]
  },
  {
    path     : ':id/:conta-receber',
    component: ContaReceberComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContasReceberPageRoutingModule {}
