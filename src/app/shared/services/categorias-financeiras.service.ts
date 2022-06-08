import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasFinanceirasService {
  categorias$: Observable<any>;
  pesquisa = new Subject<any>();

  constructor(
    private _http: HttpClient
  ) {
    this.observer;
  }

  get observer(){
    return this.categorias$ = this.pesquisa.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((descricao: string) => this.search(descricao,'receita')),
    )
  }

  search(descricao, tipo){
    if(!descricao.trim()){
      return of([]);
    }

    return this._http.get(`${environment.host}pesquisar/categorias/${tipo}/${descricao}`)
      .pipe(res => res)
  }

}
