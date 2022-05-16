import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { LocalstorageService } from './localstorage.service';

const TOKEN_KEY = 'user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private localStorageService: LocalstorageService
  ) { }

  check(): boolean {
    return this.getToken() ? true : false;
  }

  login(credentials: any) {
    return this.http.post<any>(`${environment.host}auth/login`, credentials)
      .pipe(res => res);
  }

  logout() {
    return this.http.get(`${environment}auth/logout`)
    .pipe(res => res);
  }

  getUser(): any {
    return this.getToken() ? JSON.parse(atob(this.getToken())) : null;
  }

  setUser(): Promise<boolean> {
    return this.http.get<any>(`${environment}/auth/me`).toPromise()
      .then(data => {
        if (data.user) {
          this.localStorageService.set(TOKEN_KEY, btoa(JSON.stringify(data.user)));
          return true;
        }
        return false;
      });
  }

  getToken(): string | null {
    return this.localStorageService.get('token');
  }

}
