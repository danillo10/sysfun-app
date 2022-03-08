import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsModule } from 'src/app/components';
import { SelectModule } from 'src/app/components/select/select.module';

import { InputsModule } from '../../components/inputs/inputs.module';
import { TablesModule } from '../../components/tables/tables.module';
import { ClienteComponent } from './cliente/cliente.component';
import { ClientePageRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.page';
import { FiltroComponent } from './filtro/filtro.component';
import { ClienteService } from './service/cliente.service';

@NgModule({
  declarations: [
    ClientesComponent,
    ClienteComponent,
    FiltroComponent
  ],
  imports: [
    CommonModule,
    ClientePageRoutingModule,
    ButtonsModule,
    TablesModule,
    InputsModule,
    SelectModule
  ],
  providers: [
    ClienteService
  ]
})
export class ClienteModule { }
