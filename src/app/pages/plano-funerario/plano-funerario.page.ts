import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-plano-funerario',
  templateUrl: './plano-funerario.page.html',
  styleUrls: ['./plano-funerario.page.scss'],
})
export class PlanoFunerarioComponent implements OnInit {
  addPlano= false;

  constructor(private router: Router) { }

  ngOnInit() {}

  adicionarPlano(){
    this.router.navigate(['planosfunerarios/adicionar-plano']);
  }
}
