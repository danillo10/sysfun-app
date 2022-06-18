import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsModule, PaginationModule } from 'src/app/components';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { BairroModule } from 'src/app/portlets/bairro/bairro.module';
import { CidadeModule } from 'src/app/portlets/cidade/cidade.module';
import { EnderecoModule } from 'src/app/portlets/endereco/endereco.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

import { CheckboxModule } from './../../components/checkbox/checkbox.module';
import { InputsModule } from './../../components/inputs/inputs.module';
import { SelectModule } from './../../components/select/select.module';
import { TablesModule } from './../../components/tables/tables.module';
import { ContasReceberPageRoutingModule } from './contas-receber-routing.module';
import { ContasReceberPage } from './contas-receber.page';
import { ContaReceberComponent } from './contas-receber/conta-receber.component';
import { FiltroContasComponent } from './filtro/filtro.contas.component';
import { LiquidarContaModule } from './liquidar-conta/liquidar-conta.module';

@NgModule({
  declarations: [
    ContasReceberPage,
    ContaReceberComponent,
    FiltroContasComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    InputsModule,
    TablesModule,
    CheckboxModule,
    PaginationModule,
    SelectModule,
    ContasReceberPageRoutingModule,
    NavbarModule,
    SharedModule,
    LiquidarContaModule,
    CidadeModule,
    BairroModule,
    EnderecoModule
  ]
})
export class ContasReceberModule { }
