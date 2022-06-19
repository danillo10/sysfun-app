import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsCalculosService {

  constructor() { }

  castingToNumber(v){
    if(v == "" || v == undefined || v == 0) return "";
    if(v.indexOf(',') == -1) return v;
    return v.split('.').join('').split(',').join('.');
  }
}
