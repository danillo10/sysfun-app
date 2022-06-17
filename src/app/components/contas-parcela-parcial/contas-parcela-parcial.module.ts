import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconsModule } from '../icons/icons.module';
import { ContasParcelaParcialComponent } from './contas-parcela-parcial.component';

@NgModule({
  declarations: [
    ContasParcelaParcialComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    ContasParcelaParcialComponent
  ]
})
export class ContasParcelaParcialModule { }
