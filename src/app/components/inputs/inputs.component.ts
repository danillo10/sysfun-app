import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { SelectModel } from '../select/model/select.model';

@Component({
  selector: 'app-input',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent implements OnInit {
  @Input() type: 'text' | 'password' | 'search'| 'textarea';
  @Input() mask: 'CPF' | 'CNPJ' | 'CEP';
  @Input() length: number;
  @Input() number: number;
  @Input() label: string;
  @Input() icon: string;
  @Input() placeholder: string;
  @Input() iconPosition: 'right' | 'left';
  @Input() form: FormGroup;
  @Input() control: string;
  @Input() search: boolean;
  @Input() options: SelectModel[] = [];

  @Output() searchEmitter = new EventEmitter();
  @Output() selectEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emit(e){
    this.searchEmitter.emit(e);
  }

  selecionar(e){
    this.selectEmitter.emit(e);
  }

}
