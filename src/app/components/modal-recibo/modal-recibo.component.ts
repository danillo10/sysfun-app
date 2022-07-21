import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';

import moment from 'moment';

import { IContasReceber } from 'src/app/pages/contas-receber/model/contas-receber.model';
import { ModalReciboService } from './service/modal-recibo.service';

@Component({
  selector: 'app-modal-recibo',
  templateUrl: './modal-recibo.component.html',
  styleUrls: ['./modal-recibo.component.scss'],
})
export class ModalReciboComponent implements OnInit {
  form: FormGroup;
  viewRecibo: boolean;
  dataHoje: any;
  contaRecebida: any;
  contasRecebidas: any[];
  total: number;
  @ViewChild('recibo', {static: false}) modalContent: ElementRef<any>;

  @Input() conta: IContasReceber;

  @Output() closeViewReciboEmit = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private modalReciboService: ModalReciboService,
    private pdfGenerator: PDFGenerator
  ) {
    this.total = 0;
    this.viewRecibo = false;
    this.dataHoje = moment().format('DD/MM/YYYY HH:mm:ss');

  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'data': [moment().format('DD/MM/YYYY'), Validators.required],
      'valor': [this.conta.valor, Validators.required],
      'mensagem': [null]
    })
  }

  imprimir() {
    this.viewRecibo = true;
    this.modalReciboService.imprimir(this.conta)
      .subscribe((data: any) => {
        this.dataHoje = this.form.value.data + " " + moment().format('HH:mm:ss');
        this.contaRecebida = data.conta;
        this.contasRecebidas = data.contas;
        this.calculaTotal();
      })
  }

  print() {
    console.log(this.modalContent.nativeElement)
    let options = {
      documentSize: 'A4',
      type: 'share'
    }

    let html = '<div class="recibo"><h1 class="mt-4">Funerária Aliança</h1><p>CNPJ: 02.317.053/0001-66</p><p>ENDEREÇO: AVENIDA CASTELO BRANCO, 06, VILA VITÓRIA, IMPERATRIZ-MA</p><div class="separator"></div><h2>COMPROVANTE DE PAGAMENTO</h2><h2>20/07/2022 20:53:22</h2><div class="separator"></div><h2>ANTONIO JOSE DE OLIVEIRA</h2><p>RUA FLAMENGO, 108 , CAEMA ,IMPERATRIZ - MA</p><div class="separator"></div><p>DATA: 20/07/2022</p><p>CONTRATO: 1658</p><p>MENSALIDADE: R$30.00</p><p>VENCIMENTO: 26</p><p>PRODUTO/SERVIÇO: </p><div class="separator"></div><table></table><h2 class="mt-4">PAGOU R$0.00</h2><div class="separator"></div><h2>ANTONIO JOSE DE OLIVEIRA</h2><span>(99) 98549-5154</span></div>'

    this.pdfGenerator.fromData(html, options).
      then(resolve => {
        alert("DEu bom " + resolve);
      }
      ).catch((err) => {
        alert("Deu ruim " + JSON.stringify(err));
      });
  }

  calculaTotal(){
    this.contasRecebidas.map(c => this.total += c.valor);
  }

  closeView(){
    this.closeViewReciboEmit.emit(true);
  }

}
