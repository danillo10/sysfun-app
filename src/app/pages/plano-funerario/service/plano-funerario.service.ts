import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPlanoFunerario } from '../model/plano-funerario.model';

@Injectable({
  providedIn: 'root'
})
export class PlanoFunerarioService {

  constructor(private http: HttpClient){}

  getData() {
    return this.http.get<IPlanoFunerario>('');
  }
}
