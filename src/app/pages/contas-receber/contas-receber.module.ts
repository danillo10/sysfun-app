import { TablesModule } from './../../components/tables/tables.module';
import { InputsModule } from './../../components/inputs/inputs.module';
import { ButtonsModule } from 'src/app/components';
import { ContasReceberComponent } from './contas-receber.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContasReceberPageRoutingModule } from './contas-receber-routing.module';
@NgModule({
  declarations: [
    ContasReceberComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    InputsModule,
    TablesModule,
    ContasReceberPageRoutingModule
  ],
  exports: [
    ContasReceberComponent
  ]
})
export class ContasReceberModule { }
