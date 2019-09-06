import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {
  public states = State;
  public formPrestation: FormGroup;
  private prestation = new Prestation();
  @Output() doSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.formPrestation = this.fb.group({
      typePresta: [this.prestation.typePresta],
      client: [this.prestation.client],
      nbJours: [this.prestation.nbJours],
      tjmHt: [this.prestation.tjmHt],
      tauxTva: [this.prestation.tauxTva],
      state: [this.prestation.state],
      comment: [this.prestation.comment],
    });
  }

  public onSubmit() {
    this.doSubmit.emit(this.formPrestation.value);
  }
}
