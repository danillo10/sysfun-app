import { LiquidarService } from './liquidar.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LiquidarContaComponent } from './liquidar-conta.component';

@NgModule({
  declarations: [
   LiquidarContaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
   LiquidarContaComponent
  ],
  providers: [
    LiquidarService
  ]
})
export class FiltrosModule { }
