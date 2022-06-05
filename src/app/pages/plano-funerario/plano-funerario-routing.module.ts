import { PlanoFunerarioPage } from './plano-funerario.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanoFunerarioComponent } from './plano-funerario/plano-funerario.component';


const routes: Routes = [
  {
    path: '',
    component: PlanoFunerarioComponent
  },
  {
    path     : ':id',
    component: PlanoFunerarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanoFunerarioPageRoutingModule {}
