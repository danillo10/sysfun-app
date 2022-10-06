import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLitePorter } from '@awesome-cordova-plugins/sqlite-porter/ngx';
import * as SqlCreateQueries from '../constants/sql/create';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  db: SQLiteObject;
  databaseName: string = 'funeraria-alianca.db';

  private storage: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private platform: Platform, private sqlite: SQLite, private sqlitePorter: SQLitePorter) {
  }

  async openDatabase() {
    try {
      this.db = await this.sqlite.create({ name: this.databaseName, location: 'default' });
      await this.createDatabase();
    } catch (error) {
      console.error('Ocorreu um erro ao criar o banco de dados', error);
    }
  }

  async createDatabase() {
    const sqlCreateDatabase = this.getCreateTable();
    const result = await this.sqlitePorter.importSqlToDb(this.db, sqlCreateDatabase);
    return result ? true : false;
  }

  getCreateTable() {
    const sqls = [];
    sqls.push(SqlCreateQueries.createTableClientes);
    sqls.push(SqlCreateQueries.createTableClientes);
    sqls.push(SqlCreateQueries.createTableClientesDependentes);
    sqls.push(SqlCreateQueries.createTableContasReceber);
    sqls.push(SqlCreateQueries.createTableContasReceberBaixas);
    sqls.push(SqlCreateQueries.createTableContasReceberParcelas);
    sqls.push(SqlCreateQueries.createTablePlanosFunerarios);
    sqls.push(SqlCreateQueries.createTablePlanosFunerariosDependentes);
    sqls.push(SqlCreateQueries.createTablePlanosFunerariosParcelas);
    sqls.push(SqlCreateQueries.createTablePlanosFunerariosServicos);
    sqls.push(SqlCreateQueries.createTablePlanosFunerariosStatus);
    return sqls.join('\n');
  }

  executeSQL(sql: string, params?: any[]) {
    return this.db.executeSql(sql, params);
  }
}
