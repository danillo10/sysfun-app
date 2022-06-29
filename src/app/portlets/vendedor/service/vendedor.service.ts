import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VendedorPortletService {
  tecnicos$: Observable<any>;
  profissionais$: Observable<any>;
  pesquisaTecnico = new Subject<any>();
  pesquisaProfissional = new Subject<any>();

  constructor(private _http: HttpClient) {
    this.observertecnicos;
    this.observerprofissionais;
  }

  search(data) {
    if (!data.vendedor || !data.vendedor.trim()) {
      return of([]);
    }

    return this._http
      .get(`${environment.host}pesquisar/vendedores/${data.vendedor}`)
      .pipe((res) => res);
  }

  get observertecnicos() {
    return (this.tecnicos$ = this.pesquisaTecnico.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((data: any) => this.search(data))
    ));
  }

  get observerprofissionais() {
    return (this.profissionais$ = this.pesquisaProfissional.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((data: any) => this.search(data))
    ));
  }
}
