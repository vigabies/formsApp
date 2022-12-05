/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // fazendo para armazenamento
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }


  //buscando os dados
  public get(key: string) {
    this._storage?.get(key);
  }

  //remover os dados
  public remove(key: string) {
    this._storage?.remove(key);
  }

  public getAll(){
    const lista = [];
    this._storage.forEach((value, key, index) => {
      lista.push(value);
    });
    return lista;
  }
}
