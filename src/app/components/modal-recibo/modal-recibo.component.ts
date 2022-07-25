import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';

import { IContasReceber } from 'src/app/pages/contas-receber/model/contas-receber.model';
import { ModalReciboService } from './service/modal-recibo.service';

import moment from 'moment';


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
    private pdfGenerator: PDFGenerator,
    private document: DocumentViewer
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
    this.contaRecebida.dataHoje = this.dataHoje;
    this.contaRecebida.total = this.form.value.valor;
    this.contaRecebida.contas = this.contasRecebidas;
    this.modalReciboService.imprimirRecibo(this.contaRecebida)
    .subscribe((data: any) => {
      const options: any = {
        title: 'Recibo'
      }
      const url = 'https://www.sistemafunerario.com.br/recibo-'+moment(this.form.value.data, 'DD/MM/YYYY').format('DD-MM-YYYY') + '.pdf';
      this.document.viewDocument(url, 'application/pdf', options)
    },(err) => alert("Erro ao emitir recibo"))
  }

  calculaTotal(){
    this.contasRecebidas.map(c => this.total += c.valor);
  }

  closeView(){
    this.closeViewReciboEmit.emit(true);
  }

}
