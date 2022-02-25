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
    ImprimirPageRoutingModule
  ],
  exports: [
    ImprimirReciboComponent
  ]
})
export class ImprimirReciboModule { }
