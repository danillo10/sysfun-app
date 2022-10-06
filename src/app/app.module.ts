import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { Network } from '@awesome-cordova-plugins/network/ngx';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopInterceptor } from './shared/interceptors/token.interceptor';
import { SharedModule } from './shared/modules/shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  exports: [SharedModule],
  providers: [
    Network,
    NativeStorage,
    SQLite,
    SQLitePorter,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
