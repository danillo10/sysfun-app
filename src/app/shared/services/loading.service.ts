import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  isLoading = false;

  constructor(public loadingController: LoadingController) { }

  async showLoading(message?: string) {
    if(!this.isLoading)
      this.isLoading = true;
      this.loadingController.create({
        cssClass: 'loading-custom',
        message: message ? message : 'Trabalhando...'
      }).then(loader => {
        loader.present().then(() => {
          if (!this.isLoading) {
            loader.dismiss();
          }
        });
      });
  }

  async hideLoading() {
    this.isLoading = false;
    this.loadingController.getTop().then(loader => {
      if (loader) {
        loader.dismiss();
      }
    });
  }
}
