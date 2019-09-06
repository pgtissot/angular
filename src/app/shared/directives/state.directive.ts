import { Directive, Input, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState;
  @HostBinding('class') className: string;

  constructor() {
  }

  ngOnChanges() {
     this.className = this.formatClass(this.appState);
  }

  formatClass(state): string {
    return `state-${state.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f\s]/g, '')}`;
  }

}
