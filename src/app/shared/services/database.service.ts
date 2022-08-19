import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import * as SqlQueries from '../constants/sql-queries';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private storage: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private platform: Platform, private sqlite: SQLite) {
    console.log('DATABASE SERVICE');
    this.platform.ready().then(() => {
      this.sqlite
        .create({
          name: 'funeraria-alianca.db',
          location: 'default',
        })
        .then((db: SQLiteObject) => {
          console.log('DATABASE CREATED');
          this.storage = db;

          this.storage
            .transaction((tx) => {
              console.log('DATABASE STARTED TRANSACTIONS');
              tx.executeSql(SqlQueries.createTableClientes);
              // Mais queries
            })
            .then((e) => {
              console.log(e);
              console.log('Executed SQL');
            })
            .catch((e) => console.log(e));
        });
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }
}
