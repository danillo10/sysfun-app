import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalReciboComponent } from './modal-recibo.component';
import { InputsModule } from '../inputs/inputs.module';
import { ButtonsModule } from '../buttons/buttons.module';
import { LogoModule } from '../logo/logo.module';

@NgModule({
  declarations: [
    ModalReciboComponent
  ],
  imports: [
    CommonModule,
    InputsModule,
    ButtonsModule,
    LogoModule
  ],
  exports: [
    ModalReciboComponent
  ]
})
export class ModalReciboModule { }
