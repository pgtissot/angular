import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() doChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public changeState(obj, item) {
    // item.state = obj.target.value
    this.doChange.emit({obj: item, state: obj.target.value});
  }


}
