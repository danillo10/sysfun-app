import { SelectModule } from './../../components/select/select.module';
import { CheckboxModule } from './../../components/checkbox/checkbox.module';
import { TablesModule } from './../../components/tables/tables.module';
import { InputsModule } from './../../components/inputs/inputs.module';
import { ButtonsModule, PaginationModule } from 'src/app/components';
import { ContasReceberPage } from './contas-receber.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContasReceberPageRoutingModule } from './contas-receber-routing.module';
import { LiquidarContaComponent } from './liquidar-conta/liquidar-conta.component';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

@NgModule({
  declarations: [
    ContasReceberPage,
    LiquidarContaComponent
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
    SharedModule
  ]
})
export class ContasReceberModule { }
