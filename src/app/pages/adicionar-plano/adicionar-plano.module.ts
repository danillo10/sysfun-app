import { CheckboxModule } from './../../components/checkbox/checkbox.module';
import { SelectModule } from './../../components/select/select.module';
import { ButtonsModule } from './../../components/buttons/buttons.module';
import { InputsModule } from './../../components/inputs/inputs.module';
import { AdicionarPlanoPageRoutingModule } from './adicionar-plano-routing.module';
import { AdicionarPlanoComponent } from './adicionar-plano.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AdicionarPlanoComponent
  ],
  imports: [
    CommonModule,
    InputsModule,
    ButtonsModule,
    SelectModule,
    CheckboxModule,
    AdicionarPlanoPageRoutingModule
  ],
  exports: [
    AdicionarPlanoComponent
  ]
})
export class AdicionarPlanoModule { }
