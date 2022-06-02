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
  },
  {
    path: 'imprimir', loadChildren: () => import('./pages/imprimir-recibo/imprimir-recibo.module').then(m => m.ImprimirReciboModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'sincronizar',
    loadChildren: () => import('./pages/sincronizar/sincronizar.module').then( m => m.SincronizarPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
