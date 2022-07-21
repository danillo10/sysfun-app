import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { IonicModule } from '@ionic/angular';
import { ButtonsModule, IconsModule } from 'src/app/components';
import { DependentesModule } from 'src/app/components/dependentes/dependentes.module';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { ClipboardModule } from 'ngx-clipboard';
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
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { NumberinputDirective } from 'src/app/shared/directives/numberinput.directive';

@NgModule({
  declarations: [
    ClientesPage,
    ClienteComponent,
    FiltroComponent,
    NumberinputDirective,
  ],
  imports: [
    CommonModule,
    IonicModule,
    IconsModule,
    SharedModule,
    ClientePageRoutingModule,
    ButtonsModule,
    TablesModule,
    InputsModule,
    SelectModule,
    PaginationModule,
    NavbarModule,
    DependentesModule,
    ClipboardModule,
  ],
  providers: [
    ClienteService,
    LocalstorageService,
    SelectService,
    CategoriasClientesService,
    SocialSharing,
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
  ],
  exports: [],
})
export class ClienteModule {}
