import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CentroCustoService {
  centro_custos$: Observable<any>;
  pesquisa = new Subject<any>();

  constructor(
    private _http: HttpClient
  ) {
    this.observer;
  }

  get observer(){
    return this.centro_custos$ = this.pesquisa.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((descricao: string) => this.search(descricao)),
    )
  }

  search(descricao){
    if(!descricao.trim()){
      return of([]);
    }

    return this._http.get(`${environment.host}pesquisar/centro-custos/${descricao}`)
      .pipe(res => res)
  }

}
