import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteModel } from './model/cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesComponent implements OnInit {
  filtro: boolean = false;
  data: ClienteModel[];

  constructor(private router: Router) { 
    this.data = [];
  }

  ngOnInit() {}

  add(){
    this.router.navigate(['clientes/new']);
  }

  search(){
    
  }

}
