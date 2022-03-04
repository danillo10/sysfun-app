import { SelectModule } from './../../components/select/select.module';
import { ButtonsModule } from './../../components/buttons/buttons.module';
import { InputsModule } from './../../components/inputs/inputs.module';
import { NovoClienteComponent } from './novo-cliente.page';
import { NovoClientePageRoutingModule } from './novo-cliente-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NovoClienteComponent
  ],
  imports: [
    CommonModule,
    NovoClientePageRoutingModule,
    InputsModule,
    ButtonsModule,
    SelectModule
  ],
  exports: [
    NovoClienteComponent
  ]
})
export class NovoClienteModule { }
