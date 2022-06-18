import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BairroService {

  bairros$: Observable<any>;
  pesquisa = new Subject<any>();

  constructor(
    private _http: HttpClient
  ) { 
    this.observer;
  }

  search(data){
    if(!data.bairro || !data.bairro.trim()){
      return of([]);
    }

    return this._http.post(`${environment.host}pesquisar/bairros`, {bairro: data.bairro,cidade: data.cidade, estado: data.estado})
      .pipe(res => res)
  }

  get observer(){
    return this.bairros$ = this.pesquisa.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((data: any) => this.search(data)),
    )
  }
}
