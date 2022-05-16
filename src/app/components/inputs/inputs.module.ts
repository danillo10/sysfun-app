import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonicInputMaskModule } from '@thiagoprz/ionic-input-mask';
import { NumberinputDirective } from 'src/app/shared/directives/numberinput.directive';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

import { InputsComponent } from './inputs.component';

@NgModule({
  declarations: [
    InputsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IonicInputMaskModule
  ],
  exports: [
    InputsComponent,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputsComponent,
    }
  ]
})
export class InputsModule { }
