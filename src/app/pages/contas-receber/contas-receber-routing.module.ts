
import { ContasReceberComponent } from './contas-receber.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LiquidarContaComponent } from './liquidar-conta/liquidar-conta.component';

const routes: Routes = [
  {
    path: '',
    component: ContasReceberComponent
  },
  {
    path     : ':id',
    component: LiquidarContaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContasReceberPageRoutingModule {}
