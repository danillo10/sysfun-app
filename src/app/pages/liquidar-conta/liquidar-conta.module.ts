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
    LiquidarContaPageRoutingModule
  ],
  exports: [
    LiquidarContaComponent
  ]
})
export class LiquidarContaModule { }
