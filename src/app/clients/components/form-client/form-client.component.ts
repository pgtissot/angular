import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {
  public states = StateClient;
  public formClient: FormGroup;
  private client = new Client();
  @Output() doSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.formClient = this.fb.group({
      name: [
        this.client.name,
        Validators.compose([Validators.required, Validators.minLength(2)])
      ],
      email: [
        this.client.email,
        Validators.email
      ],
      state: [this.client.state],
    });
  }

  public onSubmit() {
    this.doSubmit.emit(this.formClient.value);
  }
}
