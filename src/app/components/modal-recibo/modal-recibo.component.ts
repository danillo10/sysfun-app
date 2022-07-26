import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { DocumentViewer } from '@awesome-cordova-plugins/document-viewer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';

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
  fileTransfer: FileTransferObject

  @ViewChild('recibo', {static: false}) modalContent: ElementRef<any>;

  @Input() conta: IContasReceber;

  @Output() closeViewReciboEmit = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private modalReciboService: ModalReciboService,
    private pdfGenerator: PDFGenerator,
    private document: DocumentViewer,
    private fileOpener: FileOpener,
    private file: File,
    private transfer: FileTransfer,
  ) {
    this.total = 0;
    this.viewRecibo = false;
    this.dataHoje = moment().format('DD/MM/YYYY HH:mm:ss');
    this.fileTransfer = this.transfer.create();
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
        this.contaRecebida.produto = data.produto;
        this.calculaTotal();
      })
  }

  print() {
    this.contaRecebida.dataHoje = this.dataHoje;
    this.contaRecebida.total = this.form.value.valor;
    this.contaRecebida.contas = this.contasRecebidas;
    this.modalReciboService.imprimirRecibo(this.contaRecebida)
    .subscribe((data: any) => {
      let path = this.file.dataDirectory;

      const options: any = {
        title: 'Recibo'
      }
      const url = 'https://www.sistemafunerario.com.br/recibo-'+moment(this.form.value.data, 'DD/MM/YYYY').format('DD-MM-YYYY') + '.pdf';
      this.fileTransfer.download(url, path + 'recibo.pdf')
        .then((entry) => {
          this.fileOpener.open(path + 'recibo.pdf', 'application/pdf')
          .then(() => { console.log("open") })
          .catch(e => alert(JSON.stringify(e)));
        })
        .catch(err => alert(JSON.stringify(err)))
    },(err) => alert(JSON.stringify(err)))
  }

  calculaTotal(){
    this.contasRecebidas.map(c => this.total += c.valor);
  }

  closeView(){
    this.closeViewReciboEmit.emit(true);
  }

}
