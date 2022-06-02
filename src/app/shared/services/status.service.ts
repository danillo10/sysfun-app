import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  onNetworkChanged: BehaviorSubject<boolean>;

  constructor() {
    this.onNetworkChanged = new BehaviorSubject(navigator.onLine);
  }

  status(){
    return this.onNetworkChanged.next(navigator.onLine);
  }
}
