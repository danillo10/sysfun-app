import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginModule)
  },
  {
    path: 'home', loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path: 'clientes', loadChildren: () => import('./pages/cliente/cliente.module').then( m => m.ClienteModule)
  },
  {
    path: 'filtro', loadChildren: () => import('./pages/filtros/filtros.module').then( m => m.FiltrosModule)
  },
  {
    path: 'novocliente', loadChildren: () => import('./pages/novo-cliente/novo-cliente.module').then( m => m.NovoClienteModule)
  },
  {
    path: 'contas', loadChildren: () => import('./pages/contas-receber/contas-receber.module').then( m => m.ContasReceberModule)
  },
  {
    path: 'liquidarconta', loadChildren: () => import('./pages/liquidar-conta/liquidar-conta.module').then( m => m.LiquidarContaModule)
  },
  {
    path: 'planofunerario', loadChildren: () => import('./pages/plano-funerario/plano-funerario.module').then( m => m.PlanoFunerarioModule)
  },
  {
    path: 'adicionarplano', loadChildren: () => import('./pages/adicionar-plano/adicionar-plano.module').then( m => m.AdicionarPlanoModule)
  },
  {
    path: 'imprimir', loadChildren: () => import('./pages/imprimir-recibo/imprimir-recibo.module').then( m => m.ImprimirReciboModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
