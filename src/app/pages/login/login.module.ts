import { IconComponent } from './../../components/icon/icon.component';
import { LogoComponent } from './../../components/logo/logo.component';
import { CheckboxComponent } from './../../components/checkbox/checkbox.component';
import { ButtonComponent } from './../../components/button/button.component';
import { InputComponent } from './../../components/input/input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    LogoComponent,
    IconComponent
  ],
  imports: [CommonModule],
  exports: []
})
export class LoginModule { }
