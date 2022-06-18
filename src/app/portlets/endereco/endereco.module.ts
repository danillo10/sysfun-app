import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsModule } from 'src/app/components';
import { EnderecoComponent } from './endereco.component';



@NgModule({
  declarations: [
    EnderecoComponent
  ],
  imports: [
    CommonModule,
    InputsModule
  ],
  exports: [
    EnderecoComponent
  ]
})
export class EnderecoModule { }
