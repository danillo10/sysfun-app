import { Injectable } from '@angular/core';

import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class NativeStorageService {

  constructor(
    private nativeStorage: NativeStorage
  ) { }

  set(flag: string, value: any){
    this.nativeStorage.setItem(flag, value);
  }

  get(flag){
    return this.nativeStorage.getItem(flag);
  }

  destroy(flag){
    this.nativeStorage.remove(flag);
  }

  /**
   * @description Set string to object from localstorage
   * @param flag
   * @returns
   */
  async getParse(flag: string): Promise<any>{
    return this.nativeStorage.getItem(flag);
  }

  /**
    @description Set object data to string on localstorage
  */
  setParse(flag: string, value: any): Promise<any>{
    return this.nativeStorage.setItem(flag, JSON.stringify(value));
  }

  getSuccess(){

  }

}
