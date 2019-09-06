import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../../services/clients.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  @Output() doSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private clientsService: ClientsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(obj: Client) {
    this.clientsService.add(obj);
    // this.clientsService.add(item).subscribe((data) => {
    //   // réponse de l'API
    // })
    this.router.navigate(['clients']);
  }

}
