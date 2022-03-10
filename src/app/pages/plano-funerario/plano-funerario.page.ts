import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-plano-funerario',
  templateUrl: './plano-funerario.page.html',
  styleUrls: ['./plano-funerario.page.scss'],
})
export class PlanoFunerarioComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  adicionar(){
    this.router.navigate(['clientes/adicionar']);
  }

}
