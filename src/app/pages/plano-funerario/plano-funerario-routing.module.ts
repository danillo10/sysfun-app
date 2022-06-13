import { PlanoFunerarioPage } from './plano-funerario.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanoFunerarioComponent } from './plano-funerario/plano-funerario.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: PlanoFunerarioPage,
    canActivate: [AuthGuard]
  },
  {
    path     : ':id',
    component: PlanoFunerarioComponent,
    canActivate: [AuthGuard]
  },
  {
    path     : ':id/:formulario',
    component: PlanoFunerarioComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanoFunerarioPageRoutingModule {}
