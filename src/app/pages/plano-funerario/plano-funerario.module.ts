import { PaginationModule } from './../../components/pagination/pagination.module';
import { InputsModule } from './../../components/inputs/inputs.module';
import { TablesModule } from './../../components/tables/tables.module';
import { ButtonsModule, CheckboxModule } from 'src/app/components';
import { PlanoFunerarioPageRoutingModule } from './plano-funerario-routing.module';
import { PlanoFunerarioComponent } from './plano-funerario.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from 'src/app/components/select/select.module';
import { AdicionarPlanoComponent } from './adicionar-plano/adicionar-plano.component';
@NgModule({
  declarations: [
    PlanoFunerarioComponent,
    AdicionarPlanoComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    TablesModule,
    InputsModule,
    SelectModule,
    CheckboxModule,
    PaginationModule,
    PlanoFunerarioPageRoutingModule
  ],
  exports: [
    PlanoFunerarioComponent
  ]
})
export class PlanoFunerarioModule { }
