import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filtro-cliente',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss'],
})
export class FiltroComponent implements OnInit {
  @Output() filtrado = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  search(){
    this.filtrado.emit(true);
  }

}
