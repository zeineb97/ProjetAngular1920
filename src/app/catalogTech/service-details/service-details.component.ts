import {Component, Input, OnInit} from '@angular/core';
import {Offre} from '../../model/Offre';



@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  @Input() offre: Offre;

  constructor() {}

  ngOnInit() {
  }



}


