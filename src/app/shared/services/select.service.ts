import { Injectable } from '@angular/core';
import { SelectModel } from 'src/app/components/select/model/select.model';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor() { }

  handleSelect(data: any[], id: string, description?: string): SelectModel[]{
    return data.map((d) => {
      let desc = description ? d[description] : d[id];
      return {value: d[id], description: desc}
    });
  }
}
