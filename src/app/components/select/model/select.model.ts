export class SelectModel {
  value?: string;
  description?: string;

  constructor(data?){
    this.value = data.value || '';
    this.description = data.description || '';
  }
}
