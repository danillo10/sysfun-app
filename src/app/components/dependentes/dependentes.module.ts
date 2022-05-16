import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicInputMaskModule } from '@thiagoprz/ionic-input-mask';
import { NumberinputDirective } from 'src/app/shared/directives/numberinput.directive';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

import { ButtonsModule, InputsModule } from '..';
import { SelectModule } from '../select/select.module';
import { DependentesComponent } from './dependentes.component';

@NgModule({
  declarations: [
    DependentesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    InputsModule,
    SelectModule,
    ButtonsModule,
    IonicInputMaskModule
  ],
  exports: [
    DependentesComponent
  ]
})
export class DependentesModule { }
