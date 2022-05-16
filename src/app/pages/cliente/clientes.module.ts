import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { IonicModule } from '@ionic/angular';
import { ButtonsModule } from 'src/app/components';
import { DependentesModule } from 'src/app/components/dependentes/dependentes.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SelectModule } from 'src/app/components/select/select.module';
import { NoopInterceptor } from 'src/app/shared/interceptors/token.interceptor';
import { CategoriasClientesService } from 'src/app/shared/services/categorias-clientes.service';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
import { SelectService } from 'src/app/shared/services/select.service';

import { InputsModule } from '../../components/inputs/inputs.module';
import { TablesModule } from '../../components/tables/tables.module';
import { PaginationModule } from './../../components/pagination/pagination.module';
import { ClienteComponent } from './cliente/cliente.component';
import { ClientePageRoutingModule } from './clientes-routing.module';
import { ClientesPage } from './clientes.page';
import { FiltroComponent } from './filtro/filtro.component';
import { ClienteService } from './service/cliente.service';

@NgModule({
  declarations: [
    ClientesPage,
    ClienteComponent,
    FiltroComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ClientePageRoutingModule,
    ButtonsModule,
    TablesModule,
    InputsModule,
    SelectModule,
    PaginationModule,
    NavbarModule,
    DependentesModule
  ],
  providers: [
    ClienteService,
    LocalstorageService,
    SelectService,
    CategoriasClientesService,
    SocialSharing,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true }
  ],
  exports: [

  ]
})
export class ClienteModule { }
