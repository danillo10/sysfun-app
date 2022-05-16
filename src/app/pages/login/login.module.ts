import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';

import { CheckboxModule, InputsModule } from '../../components';
import { ButtonsModule } from './../../components/buttons/buttons.module';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.page';
import { LoginService } from './service/login.service';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    InputsModule,
    ButtonsModule,
    CheckboxModule,
    SharedModule,
  ],
  exports: [],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
