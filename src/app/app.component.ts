import { Component } from '@angular/core';

import { Network } from '@awesome-cordova-plugins/network/ngx';
import { Platform } from '@ionic/angular';
import { StatusService } from './shared/services/status.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private network: Network,
    private statusService: StatusService,
    private platform: Platform
  ) {}

  ngOnInit(){
    this.intializeApp();
  }

  intializeApp(){
    this.platform.ready().then(() => {
      this.network.onConnect().subscribe(() => {
        this.statusService.onNetworkChanged.next(true);
      });
      this.network.onDisconnect().subscribe(() => {
        this.statusService.onNetworkChanged.next(false);
      });
    })
  }

}
