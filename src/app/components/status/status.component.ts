import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {

  pago: boolean = false;
  atraso: boolean = true;
  status: boolean = false;

  constructor() { }

  ngOnInit() {}

}
