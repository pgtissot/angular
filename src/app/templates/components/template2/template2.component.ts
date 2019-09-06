import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template2',
  templateUrl: './template2.component.html',
  styleUrls: ['./template2.component.scss']
})
export class Template2Component implements OnInit {

  @Input() title: string;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
