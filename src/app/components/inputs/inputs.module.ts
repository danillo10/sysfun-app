import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonicInputMaskModule } from '@thiagoprz/ionic-input-mask';
import { CURRENCY_MASK_CONFIG, CurrencyMaskConfig, CurrencyMaskModule } from 'ng2-currency-mask';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

import { InputsComponent } from './inputs.component';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "."
};

@NgModule({
  declarations: [
    InputsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    IonicInputMaskModule,
    CurrencyMaskModule
  ],
  exports: [
    InputsComponent
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputsComponent,
    },
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ]
})
export class InputsModule { }
