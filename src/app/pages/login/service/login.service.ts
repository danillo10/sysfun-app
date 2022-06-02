import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalstorageService } from 'src/app/shared/services/localstorage.service';
import { environment } from 'src/environments/environment';

import { ILogin } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private localStorageService: LocalstorageService
  ){}

  login(data){
    return this.http.post<ILogin>(`${environment.host}auth/login`,data)
    .pipe(res => res)
  }

  saveUser({email, password, token}){
    this.localStorageService.set('token', token);
    this.localStorageService.set('email', email);
    this.localStorageService.set('password', password);
    this.localStorageService.set('autologin', 1);
  }

  getItem(flag){
    return this.localStorageService.get(flag);
  }

}
