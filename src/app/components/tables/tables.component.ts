import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClienteModel } from 'src/app/pages/cliente/model/cliente.model';
import { PesquisaModel } from 'src/app/pages/cliente/model/pesquisa.model';
import { IContasReceber } from 'src/app/pages/contas-receber/model/contas-receber.model';
import { ActionSheetModel } from 'src/app/shared/models/action-sheet.model';
import { ActionsheetService } from 'src/app/shared/services/actionsheet.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent implements OnInit {
  @Input() tabela: 'tableCliente'|'tabelaContasReceber'| 'tabelaplanosFunerarios';
  @Input() nome: string;
  @Input() icon: string;
  @Input() data: ClienteModel[] | IContasReceber [];
  @Input() total: number;
  @Input() pesquisa: PesquisaModel;

  pagina: number;

  liquidar$: Observable<any>;

  @Output() paginador = new EventEmitter();
  @Output() liquidar = new EventEmitter();

  constructor(
    private _router: Router,
    private _actionSheeService: ActionsheetService
  ) {
    this.pagina = 1;
  }

  ngOnInit() {

  }

  showActionsContas(conta: IContasReceber): void {
    this._actionSheeService.showActionSheetContaReceber('Ação', conta);
  }

  navigate(route: string, cliente: ClienteModel){
    const id = cliente.aplicativo_id ? cliente.aplicativo_id : cliente.id;
    this._router.navigate([route, id], {
      queryParams: {
        sistema: cliente.id,
        aplicativo: cliente.aplicativo_id
      }
    });
  }

  emit(){
    this.paginador.emit(this.pagina);
  }

}
