import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  set(flag: string, value: any){
    localStorage.setItem(flag, value);
  }

  get(flag){
    return localStorage.getItem(flag);
  }

  destroy(flag){
    localStorage.removeItem(flag);
  }

  setParse(flag: string, value: any){
    localStorage.setItem(flag, JSON.stringify(value));
  }

}
