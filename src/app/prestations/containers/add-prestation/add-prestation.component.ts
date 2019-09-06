import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  @Output() doSubmit: EventEmitter<any> = new EventEmitter();

  constructor(
    private prestationsService: PrestationsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(obj: Prestation) {
    this.prestationsService.add(obj);
    this.router.navigate(['prestations']);
  }

}
