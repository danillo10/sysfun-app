import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsModule, CheckboxModule, IconsModule, InputsModule } from 'src/app/components';
import { ContasParcelaParcialModule } from 'src/app/components/contas-parcela-parcial/contas-parcela-parcial.module';
import { ContasParcelasLiquidadasModule } from 'src/app/components/contas-parcelas-liquidadas/contas-parcelas-liquidadas.module';
import { SelectModule } from 'src/app/components/select/select.module';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

import { LiquidarContaComponent } from './liquidar-conta.component';
import { LiquidarService } from './service/liquidar.service';

@NgModule({
  declarations: [
    LiquidarContaComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    ButtonsModule,
    InputsModule,
    CheckboxModule,
    SelectModule,
    SharedModule,
    ContasParcelaParcialModule,
    ContasParcelasLiquidadasModule
  ],
  exports: [
    LiquidarContaComponent
  ],
  providers: [
    LiquidarService
  ]
})
export class LiquidarContaModule { }
