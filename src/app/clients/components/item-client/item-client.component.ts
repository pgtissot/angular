import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.scss']
})
export class ItemClientComponent implements OnInit {
  public states = StateClient;
  @Input() item: Client;
  @Output() doChange: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public changeState(obj, item) {
    this.doChange.emit({obj: item, state: obj.target.value});
  }

  // public update(item: Client) {
  //   this.router.navigate(['/clients/update'], item.id);
  // }

}
