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
    NovoClientePageRoutingModule
  ],
  exports: [
    NovoClienteComponent
  ]
})
export class NovoClienteModule { }
