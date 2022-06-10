import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { IParcela } from './model/parcelas.model';
import { ParcelasService } from './service/parcelas.service';

@Component({
  selector: 'app-parcelas',
  templateUrl: './parcelas.component.html',
  styleUrls: ['./parcelas.component.scss'],
})
export class ParcelasComponent implements OnInit {

  @Input() set data(parcelas: IParcela[]){
    if(parcelas.length > 0){
      this.parcelas = parcelas;
    }
  }

  @Output() parcelasSelecionadas = new EventEmitter();

  parcelas$: Observable<any>;
  parcela: IParcela;
  parcelas: IParcela[];

  constructor(
    private parcelasService: ParcelasService
  ) {

  }

  ngOnInit(): void {
  }

  ngOnChanges(){
  }

  emit() {
    this.parcelasSelecionadas.emit(this.parcelas);
  }

}
