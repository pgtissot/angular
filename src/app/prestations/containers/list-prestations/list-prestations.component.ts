import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  public collection: Prestation[];
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
    this.collection = this.prestationsService.collection;
  }

}
