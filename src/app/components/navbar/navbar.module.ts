import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconsModule } from '..';
import { LogoModule } from '../logo/logo.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LogoModule,
    IconsModule
  ],
  exports : [
    NavbarComponent
  ]
})
export class NavbarModule { }
