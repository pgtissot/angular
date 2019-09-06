import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { fakeClientsCollection } from './fake-clients';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private itemsCollection: AngularFirestoreCollection<Client>;
  private cCollection: Observable<Client[]>;
  // private urlApi: environment.urlApi;

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient
    ) {
  //  this.collection = fakeClientsCollection;
    this.itemsCollection = afs.collection<Client>('clients');
    this.collection = this.itemsCollection.valueChanges();
    // this.collection = this.http.get(`${this.urlApi}/clients`);
  }

  // get collection
  get collection(): Observable<Client[]> {
    return this.cCollection;
  }

  // set collection
  set collection(coll: Observable<Client[]>) {
    this.cCollection = coll;
  }

  // add item to collection
  public add(client: Client) {
    // this.collection.push(client);
    // return this.http.post(`${this.urlApi}/clients/`, item);
  }

  // update item in collection
  public update(item, value) {
    item.state = value;
    // const client = {...item}; // Copie par valeur car la valeur du front doit changer après le back
    // client.state = value;
    // return this.http.patch(`${this.urlApi}/clients/${item.id}`, client);
  }

  // delete item from collection
  // public delete(item: Client): Observable<any> {
  //   return this.http.delete(`${this.urlApi}/clients/${item.id}`);
  // }

  // get item by id in collection
  // public getClient(id: number): Observable<any> {
  //   return this.itemsCollection.doc<Client>(id).valueChanges();
  //   return this.http.get(`${this.urlApi}/clients/${id}`);
  // }

}
