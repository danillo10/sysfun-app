import { TablesModule } from './../../components/tables/tables.module';
import { ButtonsModule } from 'src/app/components';
import { PlanoFunerarioPageRoutingModule } from './plano-funerario-routing.module';
import { PlanoFunerarioComponent } from './plano-funerario.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    PlanoFunerarioComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    TablesModule,
    PlanoFunerarioPageRoutingModule
  ],
  exports: [
    PlanoFunerarioComponent
  ]
})
export class PlanoFunerarioModule { }
