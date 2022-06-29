import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsModule, CheckboxModule } from 'src/app/components';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SelectModule } from 'src/app/components/select/select.module';
import { BairroModule } from 'src/app/portlets/bairro/bairro.module';
import { CidadeModule } from 'src/app/portlets/cidade/cidade.module';
import { ClientePortletComponent } from 'src/app/portlets/cliente/cliente.component';
import { ClientePortletsModule } from 'src/app/portlets/cliente/cliente.module';
import { VendedorPortletsModule } from 'src/app/portlets/vendedor/vendedor.module';
import { EnderecoModule } from 'src/app/portlets/endereco/endereco.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

import { InputsModule } from './../../components/inputs/inputs.module';
import { PaginationModule } from './../../components/pagination/pagination.module';
import { TablesModule } from './../../components/tables/tables.module';
import { FiltroPlanoComponent } from './filtro/filtro.plano.component';
import { PlanoFunerarioPageRoutingModule } from './plano-funerario-routing.module';
import { PlanoFunerarioPage } from './plano-funerario.page';
import { PlanoFunerarioComponent } from './plano-funerario/plano-funerario.component';

@NgModule({
  declarations: [
    PlanoFunerarioPage,
    PlanoFunerarioComponent,
    FiltroPlanoComponent,
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    TablesModule,
    InputsModule,
    SelectModule,
    CheckboxModule,
    PaginationModule,
    PlanoFunerarioPageRoutingModule,
    NavbarModule,
    SharedModule,
    BairroModule,
    CidadeModule,
    EnderecoModule,
    ClientePortletsModule,
    VendedorPortletsModule,
  ],
})
export class PlanoFunerarioModule {}
