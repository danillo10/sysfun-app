import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconsComponent implements OnInit {
  @Input() name: string;
  @Input() ionic: boolean;

  @Output() selectIcon = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  handleIcon(){
    this.selectIcon.emit(true);
  }

}
