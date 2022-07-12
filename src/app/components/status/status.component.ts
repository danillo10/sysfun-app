import { Component, Input, OnInit } from '@angular/core';
import { identity } from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  @Input() status: any;
  @Input() tipo: 'contaReceber' | 'planoFuner';

  color: string;

  constructor() {}

  ngOnInit() {
    
  }
  
  statusContaReceber(){
    if(this.status == '0'){
      this.status = 'aberto'; 
    }else if(this.status == '1'){
      this.status = 'pago';
    }else if(this.status == '2'){
      this.status = 'atraso';
    }
  }

  statusPlanosFunerarios(){
    if(this.status == '0'){
      this.status = 'aberto'; 
    }else if(this.status == '1'){
      this.status = 'pago';
    }else if(this.status == '2'){
      this.status = 'atraso';
    }else if(this.status == '6'){
      this.color = 'bg-dark-gray'
    }
  }

}
