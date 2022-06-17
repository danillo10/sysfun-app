import { Component, OnInit } from '@angular/core';
import { ContaBancariaModel } from 'src/app/shared/models/conta-bancaria.model';
import { ContasBancariasService } from 'src/app/shared/services/contas-bancarias.service';

@Component({
  selector: 'app-contas-bancarias',
  templateUrl: './contas-bancarias.component.html',
  styleUrls: ['./contas-bancarias.component.scss'],
})
export class ContasBancariasComponent implements OnInit {

  contas: ContaBancariaModel[];

  constructor(
    private contasBancariasService: ContasBancariasService
  ) {
    this.contas = []
  }

  ngOnInit(
  ) {

  }

}
