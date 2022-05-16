import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ButtonsModule } from 'src/app/components';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';

import { SincronizarService } from './service/sincronizar.service';
import { SincronizarPageRoutingModule } from './sincronizar-routing.module';
import { SincronizarPage } from './sincronizar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SincronizarPageRoutingModule,
    ButtonsModule
  ],
  declarations: [SincronizarPage],
  providers: [
    LocalstorageService,
    SincronizarService
  ]
})
export class SincronizarPageModule {}
