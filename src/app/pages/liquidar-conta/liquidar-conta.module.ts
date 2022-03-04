import { SelectModule } from './../../components/select/select.module';
import { CheckboxModule } from './../../components/checkbox/checkbox.module';
import { ButtonsModule } from './../../components/buttons/buttons.module';
import { InputsModule } from './../../components/inputs/inputs.module';
import { LiquidarContaPageRoutingModule } from './liquidar-conta-routing.module';
import { LiquidarContaComponent } from './liquidar-conta.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LiquidarContaComponent
  ],
  imports: [
    CommonModule,
    LiquidarContaPageRoutingModule,
    InputsModule,
    ButtonsModule,
    CheckboxModule,
    SelectModule
  ],
  exports: [
    LiquidarContaComponent
  ]
})
export class LiquidarContaModule { }
