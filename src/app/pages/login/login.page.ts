import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;

  constructor( ) { }

  ngOnInit() {
    // this.formulario = this.formBuilder.group({
    //   nome: [null],
    //   senha: [null]
    // });
  }

}
