import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';

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
    private router: Router,
    private localStorageService: LocalstorageService,
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      remember: [true],
      token: [null]
    });

    this.autoLogin();
  }

  login() {
    this.loadingService.showLoading('Fazendo Login')
      .then(() => {
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
              this.loadingService.hideLoading();
            },
            (err) => {
              if (err.message == 'Token has expired')
                this.localStorageService.destroy('token');
              alert(messages.login.credentials);
              this.loadingService.hideLoading();
            }
          )
      })
  }

  autoLogin() {
    const email = this.loginService.getItem('email');
    const password = this.loginService.getItem('password');
    const autoLogin = this.loginService.getItem('autologin');

    if (email) this.form.patchValue({ email: email });
    if (password) this.form.patchValue({ password: password });

    if (autoLogin) this.login();
  }

}
