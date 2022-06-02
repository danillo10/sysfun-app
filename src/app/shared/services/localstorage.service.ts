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

  /**
   * @description Set string to object from localstorage
   * @param flag
   * @returns
   */
  getParse(flag: string){
    const data = JSON.parse(localStorage.getItem(flag));
    return data ? data : [];
  }

  /**
    @description Set object data to string on localstorage
  */
  setParse(flag: string, value: any){
    localStorage.setItem(flag, JSON.stringify(value));
  }

}
