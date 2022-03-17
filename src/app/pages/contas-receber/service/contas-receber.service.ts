import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContasReceber } from '../model/contas-receber.model';

@Injectable({
  providedIn: 'root'
})
export class ContasReceberService {

  constructor(private http: HttpClient){}

    getData() {
      return this.http.get<IContasReceber>('');
    }
}
