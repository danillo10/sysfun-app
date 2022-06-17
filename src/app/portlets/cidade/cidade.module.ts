import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputsModule } from 'src/app/components';

import { CidadeComponent } from './cidade.component';

@NgModule({
  declarations: [
    CidadeComponent
  ],
  imports: [
    CommonModule,
    InputsModule
  ],
  exports: [
    CidadeComponent
  ]
})
export class CidadeModule { }
