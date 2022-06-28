import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IndicacaoPortletService {
  indicacao$: Observable<any>;
  pesquisa = new Subject<any>();

  constructor(private _http: HttpClient) {
    this.observer;
  }

  search(data) {
    if (!data.indicacao || !data.indicacao.trim()) {
      return of([]);
    }

    return this._http.post(`${environment.host}clientes/ambos`, { cliente: data.cliente })
      .pipe((res) => res);
  }

  get observer() {
    return (this.indicacao$ = this.pesquisa.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((data: any) => this.search(data))
    ));
  }
}
