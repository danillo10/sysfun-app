import { Injectable } from '@angular/core';
import { SelectModel } from 'src/app/components/select/model/select.model';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor() { }

  handleSelect(data: any[], value: string, description?: string): SelectModel[]{
    return data.map((d) => {
      let desc = description ? d[description] : d[value];
      return {value: d[value], description: desc}
    });
  }
}
