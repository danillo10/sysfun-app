import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalReciboComponent } from './modal-recibo.component';
import { InputsModule } from '../inputs/inputs.module';
import { ButtonsModule } from '../buttons/buttons.module';
import { LogoModule } from '../logo/logo.module';
import { IconsModule } from '../icons/icons.module';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';


@NgModule({
  declarations: [
    ModalReciboComponent
  ],
  imports: [
    CommonModule,
    InputsModule,
    ButtonsModule,
    LogoModule,
    IconsModule
  ],
  exports: [
    ModalReciboComponent
  ],
  providers: [
    PDFGenerator
  ]
})
export class ModalReciboModule { }
