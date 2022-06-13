import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Observable, Subject } from 'rxjs';
import { LiquidarService } from 'src/app/pages/contas-receber/liquidar-conta/service/liquidar.service';
import { IContasReceber } from 'src/app/pages/contas-receber/model/contas-receber.model';

@Injectable({
  providedIn: 'root'
})
export class ActionsheetService {
  actionSheet: any;

  liquidar$: Observable<any>;
  liquidar = new Subject();

  constructor(
    private actionSheetController: ActionSheetController,
    private liquidarService: LiquidarService
  ) {
    this.liquidar$ = this.liquidar.pipe(res => res);
  }

  async showActionSheetContaReceber(
    acao: string = 'Ações',
    conta: IContasReceber
  ) {
    this.actionSheet = await this.actionSheetController.create({
      header: acao,
      cssClass: 'action-sheet-sysfun',
      buttons: [
        {
          text: 'Liquidar Conta',
          // icon: 'money',
          handler: () => {
            this.liquidar.next(conta)
          },
        },
        {
          text: 'Imprimir Comprovante',
          // icon: 'print',
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });

    await this.actionSheet.present();
  }

  async hideActionSheet(){
    await this.actionSheet.onDidDismiss();
  }
}
