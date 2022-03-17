import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ClienteModel } from '../model/cliente.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient){}

    getData() {
      return this.http.get<ClienteModel>('');
    }
}
