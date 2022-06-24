import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputsModule } from 'src/app/components';
import { ClientePortletComponent } from './cliente.component';

@NgModule({
  declarations: [
    ClientePortletComponent
  ],
  imports: [
    CommonModule,
    InputsModule
  ],
  exports: [
    ClientePortletComponent
  ]
})
export class ClientePortletsModule { }