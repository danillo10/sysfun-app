import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  changeTelefone(telefone){
    return '55' + telefone.replace('(','').replace(')','').replace('-','').replace(' ','');
  }
}
