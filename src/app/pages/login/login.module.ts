import { ButtonsModule } from './../../components/buttons/buttons.module';
import { LoginComponent } from './login.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageRoutingModule } from './login-routing.module';
import { CheckboxModule, InputsModule } from '../../components/index';
@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    InputsModule,
    ButtonsModule,
    CheckboxModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
