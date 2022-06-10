import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtro-plano-funerario',
  templateUrl: './filtro.plano.component.html',
  styleUrls: ['./filtro.plano.component.scss'],
})
export class FiltroPlanoComponent implements OnInit {
  @Output() filtrado = new EventEmitter();
  
  constructor() { }

  ngOnInit() {}

  search(){
    this.filtrado.emit(true);
  }

}