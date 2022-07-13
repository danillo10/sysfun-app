import { Component, Input, OnInit } from '@angular/core';
import { identity } from 'rxjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  @Input() status: any;
  @Input() tipo: string;

  color: string;

  constructor() {}

  ngOnInit() {
    if(this.tipo && this.tipo == 'contaReceber'){
      this.statusContaReceber();
    }else if(this.tipo && this.tipo == 'planoFunerario'){
      this.statusPlanosFunerarios();
    }
  }
  
  statusContaReceber(){
    console.log(this.status)
    if(this.status == '0'){
      this.color = 'bg-gray'; 
    }else if(this.status == '1'){
      this.color = 'bg-green';
    }else if(this.status == '2'){
      this.color = 'bg-yellow';
    }
  }

  statusPlanosFunerarios(){
    if(this.status == '0'){
      this.color = 'bg-gray'; 
    }else if(this.status == '1'){
      this.color = 'bg-yellow';
    }else if(this.status == '2'){
      this.color = 'bg-green'
    }else if(this.status == '3'){
      this.color = 'bg-red'
    }else if(this.status == '4'){
      this.color = 'bg-orange';
    }else if(this.status == '5'){
      this.color = 'bg-blue'
    }else if(this.status == '6'){
      this.color = 'bg-dark-gray'
    }
  }

}
