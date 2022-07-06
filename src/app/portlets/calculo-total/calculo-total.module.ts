import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculoTotalComponent } from './calculo-total.component';
import { SelectModule } from 'src/app/components/select/select.module';

@NgModule({
  declarations: [CalculoTotalComponent],
  imports: [CommonModule, SelectModule],
  exports: [CalculoTotalComponent],
})
export class CalculoTotalModule {}
