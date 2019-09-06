import { Component, OnInit, OnDestroy } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit, OnDestroy {
  // private subscribe: Subscription;
  // public collection: Client[];
  public collection$: Observable<Client[]>;
  public headers = [
    'Nom',
    'Email',
    'State',
    'Action'
  ];

  constructor(
    private clientsService: ClientsService
  ) { }

  ngOnInit() {
    this.collection$ = this.clientsService.collection;
    // this.subscribe = this.clientsService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
  }

  ngOnDestroy() {
    // this.subscribe.unsubscribe();
  }

  changeState(arg) {
    this.clientsService.update(arg.obj, arg.state);
    // this.clientsService.update(arg.obj, arg.state).subscribe((data) => {
    //   // return boolean => arg.obj.state = arg.state
    //   // return obj modifié en entier => arg.obj.state = obj.state
    // });
  }

  addClient(obj: Client) {
    this.clientsService.add(obj);
  }

  deleteClient(obj: Client) {
    // this.clientsService.delete(obj).subscribe((data) => {
    //   // data = réponse de l'API
    // });
  }
}

