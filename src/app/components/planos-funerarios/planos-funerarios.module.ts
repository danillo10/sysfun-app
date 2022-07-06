import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicInputMaskModule } from '@thiagoprz/ionic-input-mask';
import { NumberinputDirective } from 'src/app/shared/directives/numberinput.directive';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

import { ButtonsModule, InputsModule } from '..';
import { SelectModule } from '../select/select.module';
import { PlanosFunerariosComponent } from './planos-funerarios.component';

@NgModule({
  declarations: [PlanosFunerariosComponent, NumberinputDirective],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    InputsModule,
    SelectModule,
    ButtonsModule,
    IonicInputMaskModule,
  ],
  exports: [PlanosFunerariosComponent],
})
export class PlanosFunerariosModule {}
