import { Component } from '@angular/core';

import { Network } from '@awesome-cordova-plugins/network/ngx';
import { Platform } from '@ionic/angular';
import { StatusService } from './shared/services/status.service';
import { DatabaseService } from './shared/services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private network: Network,
    private statusService: StatusService,
    private databaseService: DatabaseService,
    private platform: Platform
  ) {}

  ngOnInit() {
    this.intializeApp();
  }

  intializeApp() {
    this.platform.ready().then(() => {
      this.network.onConnect().subscribe(() => {
        this.statusService.onNetworkChanged.next(true);
      });
      this.network.onDisconnect().subscribe(() => {
        this.statusService.onNetworkChanged.next(false);
      });
      // this.databaseService.dbState().subscribe((res) => {
      //   console.log('DATABASE SUBSCRIBE');
      //   console.log(res);
      // });
    });
  }
}
