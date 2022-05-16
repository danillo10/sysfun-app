import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() type: 'remember' | 'checkAccount' | 'checkbox';
  @Input() label: string;
  @Input() form: FormGroup;
  @Input() control: string;
  @Output() checkboxSetted = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  set(e){
    this.form.value[this.control] = e.target.checked
  }

}
