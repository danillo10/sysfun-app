import { ButtonsModule } from 'src/app/components';
import { InputsModule } from './../../components/inputs/inputs.module';
import { ImprimirPageRoutingModule } from './imprimir-recibo-routing.module';
import { ImprimirReciboComponent } from './imprimir-recibo.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ImprimirReciboComponent
  ],
  imports: [
    CommonModule,
    InputsModule,
    ButtonsModule,
    ImprimirPageRoutingModule
  ],
  exports: [
    ImprimirReciboComponent
  ]
})
export class ImprimirReciboModule { }
