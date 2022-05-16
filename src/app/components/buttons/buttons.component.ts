import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  @Input() color: string;
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() type: 'normal' | 'delete';

  constructor() { }

  ngOnInit() {}

}
