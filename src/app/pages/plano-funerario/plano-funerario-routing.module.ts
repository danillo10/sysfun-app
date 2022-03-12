import { PlanoFunerarioComponent } from './plano-funerario.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdicionarPlanoComponent } from './adicionar-plano/adicionar-plano.component';


const routes: Routes = [
  {
    path: '',
    component: PlanoFunerarioComponent
  },
  {
    path     : ':id',
    component: AdicionarPlanoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanoFunerarioPageRoutingModule {}
