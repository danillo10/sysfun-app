import { ButtonsModule } from './../../components/buttons/buttons.module';
import { InputsModule } from './../../components/inputs/inputs.module';
import { SelectModule } from './../../components/select/select.module';
import { FiltrosPageRoutingModule } from './filtros-routing.module';
import { FiltrosComponent } from './filtros.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FiltrosComponent
  ],
  imports: [
    CommonModule,
    SelectModule,
    FiltrosPageRoutingModule,
    InputsModule,
    SelectModule,
    ButtonsModule
  ],
  exports: [
    FiltrosComponent
  ]
})
export class FiltrosModule { }
