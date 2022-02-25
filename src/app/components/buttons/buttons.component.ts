import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-butons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
  @Input() color: string;
  @Input() label: string;

  constructor() { }

  ngOnInit() {}

}
