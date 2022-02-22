import { LoginComponent } from './login.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageRoutingModule } from './login-routing.module';
import { InputModule } from 'src/app/components/input/input.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    InputModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
