import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'clientes', loadChildren: () => import('./pages/cliente/clientes.module').then(m => m.ClienteModule)
  },
  {
    path: 'contas-receber', loadChildren: () => import('./pages/contas-receber/contas-receber.module').then(m => m.ContasReceberModule)
  },
  {
    path: 'planosfunerarios', loadChildren: () => import('./pages/plano-funerario/plano-funerario.module').then(m => m.PlanoFunerarioModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
