import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() label: string;
  @Input() type: 'select';
  @Input() form: FormGroup;
  @Input() control: string;
  @Input() options: any[];

  constructor() { }

  ngOnInit() {}

}
