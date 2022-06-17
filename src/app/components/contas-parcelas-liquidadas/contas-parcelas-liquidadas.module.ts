import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconsModule } from '../icons/icons.module';
import { ContasParcelasLiquidadasComponent } from './contas-parcelas-liquidadas.component';



@NgModule({
  declarations: [
    ContasParcelasLiquidadasComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    ContasParcelasLiquidadasComponent
  ]
})
export class ContasParcelasLiquidadasModule { }
