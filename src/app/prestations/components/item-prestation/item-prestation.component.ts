import { Component, OnInit, Input } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-item-prestation',
  templateUrl: './item-prestation.component.html',
  styleUrls: ['./item-prestation.component.scss']
})
export class ItemPrestationComponent implements OnInit {
  public states = State;
  @Input() item: Prestation;

  constructor() { }

  ngOnInit() {
  }

  public changeState(event, item) {
    item.state = event.target.value;
  }


}
