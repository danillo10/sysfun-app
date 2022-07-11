import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { fromEvent, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { CalculoTotalService } from 'src/app/shared/services/calculo-total.service';
import { UtilsCalculosService } from 'src/app/shared/services/utils-calculos.service';

import { SelectModel } from '../select/model/select.model';

@Component({
  selector: 'app-input',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss'],
})
export class InputsComponent implements OnInit {
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef;
  @Input() type: 'text' | 'password' | 'search' | 'textarea';
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
  @Input() searchText: string;
  @Input() disabled: boolean = false;

  @Input() set data(options: SelectModel[]) {
    this.options = options.length > 0 ? options : [];
  }

  @Output() searchEmitter = new EventEmitter();
  @Output() selectEmitter = new EventEmitter();
  @Output() selectIcon = new EventEmitter();
  @Output() moneyEmitter = new EventEmitter();

  options: SelectModel[];

  searchEvent = new Subject<any>();
  searchObservable$: Observable<any>;

  constructor(
    private _utilsCalculosService: UtilsCalculosService,
    private _calculoTotalService: CalculoTotalService
  ) {}

  ngOnInit() {
    this.searchObservable$ = this.searchEvent.pipe(
      map((event: any) => {
        return event;
      }),
      debounceTime(1000),
      distinctUntilChanged()
    );

    this.searchObservable$.subscribe((text) => this.emit(text));
  }

  emit(e) {
    this.searchEmitter.emit(e);
  }

  selecionar(e) {
    this.selectEmitter.emit(e);
  }

  iconClicked() {
    this.selectIcon.emit();
  }

  searching(e) {
    this.searchEvent.next(e);
  }

  setValor(control, v) {
    this.form.patchValue({
      control: this._utilsCalculosService.castingToNumber(v),
    });
    this.moneyEmitter.emit(true);
  }
}
