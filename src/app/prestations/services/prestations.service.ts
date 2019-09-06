import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestationsCollection } from './fake-prestations';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  private pCollection: Observable<Prestation[]>;

  constructor(private afs: AngularFirestore) {
    // this.collection = fakePrestationsCollection;
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection = this.itemsCollection.valueChanges().pipe(
      map(tab => tab.map(obj => new Prestation(obj)))
      // map((tab) => {
      //   return tab.map((obj) => {
      //     return new Prestation(obj);
      //   });
      // })
    );
  }

  // get collection
  get collection(): Observable<Prestation[]> {
    return this.pCollection;
  }

  // set collection
  set collection(coll: Observable<Prestation[]>) {
    this.pCollection = coll;
  }

  // add item to collection
  public add(presta: Prestation) {
    // this.collection.push(presta);
  }

  // update item in collection
  public update(item, value) {
    item.state = value;
  }

  // get item by id in collection
  public get(id: number): Prestation {
    return this.collection[id];
  }

}
