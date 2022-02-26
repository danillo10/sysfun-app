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
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path: '',
    redirectTo: 'clientesfornecedores',
    pathMatch: 'full'
  },
  {
    path: 'clientesfornecedores', loadChildren: () => import('./pages/cliente/cliente.module').then( m => m.ClienteModule)
  },
  {
    path: '',
    redirectTo: 'filtro',
    pathMatch: 'full'
  },
  {
    path: 'filtro', loadChildren: () => import('./pages/filtros/filtros.module').then( m => m.FiltrosModule)
  },
  {
    path: '',
    redirectTo: 'novoclientefornecedor',
    pathMatch: 'full'
  },
  {
    path: 'novoclientefornecedor', loadChildren: () => import('./pages/novo-cliente/novo-cliente.module').then( m => m.NovoClienteModule)
  },
  {
    path: '',
    redirectTo: 'contasareceber',
    pathMatch: 'full'
  },
  {
    path: 'contasareceber', loadChildren: () => import('./pages/contas-receber/contas-receber.module').then( m => m.ContasReceberModule)
  },
  {
    path: '',
    redirectTo: 'liquidarconta',
    pathMatch: 'full'
  },
  {
    path: 'liquidarconta', loadChildren: () => import('./pages/liquidar-conta/liquidar-conta.module').then( m => m.LiquidarContaModule)
  },
  {
    path: '',
    redirectTo: 'planosfunerario',
    pathMatch: 'full'
  },
  {
    path: 'planosfunerario', loadChildren: () => import('./pages/plano-funerario/plano-funerario.module').then( m => m.PlanoFunerarioModule)
  },
  {
    path: '',
    redirectTo: 'adicionarplano',
    pathMatch: 'full'
  },
  {
    path: 'adicionarplano', loadChildren: () => import('./pages/adicionar-plano/adicionar-plano.module').then( m => m.AdicionarPlanoModule)
  },
  {
    path: '',
    redirectTo: 'imprimirrecibo',
    pathMatch: 'full'
  },
  {
    path: 'imprimirrecibo', loadChildren: () => import('./pages/imprimir-recibo/imprimir-recibo.module').then( m => m.ImprimirReciboModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
