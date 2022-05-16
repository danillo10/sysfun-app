import { Component } from '@angular/core';
import { Network } from '@awesome-cordova-plugins/network/ngx';

import { CategoriasClientesService } from './shared/services/categorias-clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private categoriasService: CategoriasClientesService,
    private network: Network
  ) {}

  ngOnInit(){
    this.intializeApp();
  }

  intializeApp(){
    let connected = this.network.onConnect().subscribe(() => alert("Connected"));
    let disconnected = this.network.onDisconnect().subscribe(() => alert("Disconnected"));

    connected.unsubscribe();
    disconnected.unsubscribe();
  }

}
