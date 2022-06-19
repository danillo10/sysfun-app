import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  @Input() status: any;

  constructor() {}

  ngOnInit() {
    if(this.status == '0'){
      this.status = 'aberto'; 
    }else if(this.status == '1'){
      this.status = 'pago';
    }else if(this.status == '2'){
      this.status = 'atraso';
    }
    console.log(this.status)
  }

}
