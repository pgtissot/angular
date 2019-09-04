import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakeCollection } from './fake-collection';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private pCollection: Prestation[];

  constructor() {
    this.collection = fakeCollection;
  }

  // get collection
  get collection(): Prestation[] {
    return this.pCollection;
  }

  // set collection
  set collection(coll: Prestation[]) {
    this.pCollection = coll;
  }

  // add item to collection
  public add(presta: Prestation) {
    this.collection.push(presta);
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
