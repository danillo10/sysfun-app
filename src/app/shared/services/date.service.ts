import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  format(date){
    return date ? new Date(date).toLocaleDateString() : '';
  }
}
