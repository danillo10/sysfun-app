import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

import messages from '../utils/messages.json';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      remember: [false],
      token: [null]
    });

    this.autoLogin();
  }

  login(){
    this.authService.login(this.form.value)
      .subscribe(
        (data: any) => {
          const user = {
            email: this.form.value.email,
            password: this.form.value.password,
            token: data.token
          }

          this.loginService.saveUser(user);
          this.router.navigate(['dashboard']);
        },
        (err) => alert(messages.login.credentials)
      )
  }

  autoLogin(){
    const email = this.loginService.getItem('email');
    const password = this.loginService.getItem('password');
    const autoLogin = this.loginService.getItem('autologin');

    if(email) this.form.patchValue({email: email});
    if(password) this.form.patchValue({password: password});

    if(autoLogin) this.login();
  }

}
