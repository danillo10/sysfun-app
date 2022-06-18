import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BairroComponent } from './bairro.component';
import { InputsModule } from 'src/app/components';



@NgModule({
  declarations: [
    BairroComponent
  ],
  imports: [
    CommonModule,
    InputsModule
  ],
  exports: [
    BairroComponent
  ]
})
export class BairroModule { }
