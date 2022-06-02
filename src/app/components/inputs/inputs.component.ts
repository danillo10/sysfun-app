import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { SelectModel } from '../select/model/select.model';

@Component({
  selector: 'app-input',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent implements OnInit {
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  @Input() type: 'text' | 'password' | 'search'| 'textarea';
  @Input() mask: 'CPF' | 'CNPJ' | 'CEP' | 'DATA';
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
  @Output() selectIcon = new EventEmitter();

  searchEvent = new Subject<any>();
  searchObservable$: Observable<any>;

  constructor() { }

  ngOnInit() {
    this.searchObservable$ = this.searchEvent
    .pipe(
      map((event: any) => {
        return event;
      }),
      debounceTime(1000),
      distinctUntilChanged()
    )

    this.searchObservable$.subscribe(text => this.emit(text))
  }

  emit(e){
    this.searchEmitter.emit(e);
  }

  selecionar(e){
    this.selectEmitter.emit(e);
  }

  iconClicked(){
    this.selectIcon.emit();
  }

  searching(e){
    this.searchEvent.next(e)
  }

}
