import { CheckboxModule } from './../../components/checkbox/checkbox.module';
import { TablesModule } from './../../components/tables/tables.module';
import { InputsModule } from './../../components/inputs/inputs.module';
import { ButtonsModule, PaginationModule } from 'src/app/components';
import { ContasReceberComponent } from './contas-receber.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContasReceberPageRoutingModule } from './contas-receber-routing.module';
import { LiquidarContaComponent } from './liquidar-conta/liquidar-conta.component';
@NgModule({
  declarations: [
    ContasReceberComponent,
    LiquidarContaComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    InputsModule,
    TablesModule,
    CheckboxModule,
    PaginationModule,
    ContasReceberPageRoutingModule
  ],
  exports: [
    ContasReceberComponent
  ]
})
export class ContasReceberModule { }
