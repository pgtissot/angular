import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {
  private subscribe: Subscription;
  public collection$: Observable<Prestation[]>;
  public headers = [
    'Type',
    'Client',
    'Durée',
    'Total HT',
    'Total TTC',
    'State',
    'Action'
  ];

  constructor(
    private prestationsService: PrestationsService
  ) { }

  ngOnInit() {
    this.collection$ = this.prestationsService.collection;
    // this.subscribe = this.prestationsService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
  }

  ngOnDestroy() {
    // this.subscribe.unsubscribe();
  }

  changeState(obj) {
    this.prestationsService.update(obj.obj, obj.state);

  }

  addPrestation(obj: Prestation) {
    this.prestationsService.add(obj);
  }

}
