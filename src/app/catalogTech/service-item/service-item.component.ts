import {Component, Input, OnInit} from '@angular/core';
import {Offre} from '../../model/Offre';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {
  @Input() offre: Offre;
  constructor() { }

  ngOnInit() {
  }

}
