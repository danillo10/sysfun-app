import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicInputMaskModule } from '@thiagoprz/ionic-input-mask';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

import { ButtonsModule, InputsModule } from '..';
import { SelectModule } from '../select/select.module';
import { ParcelasComponent } from './parcelas.component';

@NgModule({
  declarations: [
    ParcelasComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InputsModule,
    SelectModule,
    IonicInputMaskModule
  ],
  exports: [
    ParcelasComponent
  ]
})
export class ParcelasModule { }
