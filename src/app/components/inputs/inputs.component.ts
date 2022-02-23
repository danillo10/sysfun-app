import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent implements OnInit {
  @Input() type: 'Email' | 'Password';
  @Input() label: string;
  constructor() { }

  ngOnInit() {}

}
