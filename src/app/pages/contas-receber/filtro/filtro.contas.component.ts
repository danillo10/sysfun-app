import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtro-contas-receber',
  templateUrl: './filtro.contas.component.html',
  styleUrls: ['./filtro.contas.component.scss'],
})
export class FiltroContasComponent implements OnInit {
  @Output() filtrado = new EventEmitter();
  
  constructor() { }

  ngOnInit() {}

  search(){
    this.filtrado.emit(true);
  }

}