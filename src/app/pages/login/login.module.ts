import { LoginComponent } from './login.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [CommonModule],
  exports: [LoginComponent]
})
export class LoginModule { }
