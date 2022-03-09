import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent implements OnInit {
  @Input() type: 'text' | 'password' | 'search'| 'textArea';
  @Input() label: string;
  @Input() icon: string;
  @Input() iconPosition: 'right' | 'left';

  constructor() { }

  ngOnInit() {}

}
