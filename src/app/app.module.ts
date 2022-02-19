import { LoginComponent } from './pages/login/login.page';
import { DashboardComponent } from './pages/dashboard/dashboard.page';
import { ContasReceberComponent } from './pages/contas-receber/contas-receber.page';
import { ClienteComponent } from './pages/cliente/cliente.page';
import { TabelaComponent } from './components/tabela/tabela.component';
import { PaginacaoComponent } from './components/paginacao/paginacao.component';
import { LogoComponent } from './components/logo/logo.component';
import { InputComponent } from './components/input/input.component';
import { IconComponent } from './components/icon/icon.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CheckboxComponent,
    IconComponent,
    InputComponent,
    LogoComponent,
    PaginacaoComponent,
    TabelaComponent,
    ClienteComponent,
    ContasReceberComponent,
    DashboardComponent,
    LoginComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
