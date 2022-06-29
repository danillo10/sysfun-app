import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputsModule } from 'src/app/components';
import { VendedorPortletComponent } from './vendedor.component';

@NgModule({
  declarations: [VendedorPortletComponent],
  imports: [CommonModule, InputsModule],
  exports: [VendedorPortletComponent],
})
export class VendedorPortletsModule {}
