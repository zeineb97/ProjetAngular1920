import {Component, Input, OnInit} from '@angular/core';
import {Offre} from '../../model/Offre';

@Component({
  selector: 'app-services-liste',
  templateUrl: './services-liste.component.html',
  styleUrls: ['./services-liste.component.css']
})
export class ServicesListeComponent implements OnInit {
  @Input() offres: Offre[];
  constructor() { }

  ngOnInit() {
  }

}
