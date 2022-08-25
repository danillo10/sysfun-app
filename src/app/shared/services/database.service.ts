import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import * as SqlCreateQueries from '../constants/sql/create';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private storage: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private platform: Platform, private sqlite: SQLite) {
    console.log('DATABASE SERVICE');
    this.platform.ready().then(() => {
      this.getDB().then((db: SQLiteObject) => {
        console.log('DATABASE CREATED');
        this.storage = db;

        console.log('DATABASE STARTED TRANSACTIONS');
        db.sqlBatch([
          SqlCreateQueries.createTableClientes,
          SqlCreateQueries.createTableClientesDependentes,
          SqlCreateQueries.createTableContasReceber,
          SqlCreateQueries.createTableContasReceberBaixas,
          SqlCreateQueries.createTableContasReceberParcelas,
          SqlCreateQueries.createTablePlanosFunerarios,
          SqlCreateQueries.createTablePlanosFunerariosDependentes,
          SqlCreateQueries.createTablePlanosFunerariosParcelas,
          SqlCreateQueries.createTablePlanosFunerariosServicos,
          SqlCreateQueries.createTablePlanosFunerariosStatus,
        ])
          .then((e) => {
            console.log(e);
            console.log('Executed SQL');
          })
          .catch((e) => console.log(e));
      });
    });
  }

  public getDB() {
    return this.sqlite.create({
      name: 'funeraria-alianca.db',
      location: 'default',
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }
}
