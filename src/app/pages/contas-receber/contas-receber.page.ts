import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contas-receber',
  templateUrl: './contas-receber.page.html',
  styleUrls: ['./contas-receber.page.scss'],
})
export class ContasReceberComponent implements OnInit {
  adicionarConta = false;

  constructor(private router: Router) { }

  ngOnInit() {}

   addConta(){
    this.router.navigate(['contas-receber/receita']);
  }

}
