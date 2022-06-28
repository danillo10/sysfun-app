import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsCalculosService {

  constructor() { }

  castingToNumber(v){
    if(!v) return 0;
    if(v.indexOf(',') == -1) return v;
    return v.split('.').join('').split(',').join('.');
  }
}
