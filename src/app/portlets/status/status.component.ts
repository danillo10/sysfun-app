import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectModel } from 'src/app/components/select/model/select.model';

import status from '../../pages/utils/status.json';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() control: string;
  @Input() tipo: 'status' | 'planoFunerarioStatus';

  status: SelectModel[];

  constructor() {
  }

  ngOnInit() {
    this.status = status[this.tipo];
  }

}
