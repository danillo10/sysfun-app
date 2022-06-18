import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  enderecos$: Observable<any>;
  pesquisa = new Subject<any>();

  constructor(
    private _http: HttpClient
  ) { 
    this.observer;
  }
  
  search(data){
    if(!data.endereco || !data.endereco.trim()){
      return of([]);
    }

    return this._http.post(`${environment.host}pesquisar/enderecos`, {endereco: data.endereco,bairro: data.bairro,cidade: data.cidade, estado: data.estado})
      .pipe(res => res)
  }

  get observer(){
    return this.enderecos$ = this.pesquisa.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((data: any) => this.search(data)),
    )
  }
  

}
