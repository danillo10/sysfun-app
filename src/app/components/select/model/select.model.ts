export class SelectModel {
  value?: number | string;
  description?: string;

  constructor(data?){
    this.value = data.value || '';
    this.description = data.description || '';
  }
}
