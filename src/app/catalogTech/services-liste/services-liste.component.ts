import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Offre} from '../../model/Offre';

@Component({
  selector: 'app-services-liste',
  templateUrl: './services-liste.component.html',
  styleUrls: ['./services-liste.component.css']
})
export class ServicesListeComponent implements OnInit {
  searchVal = '' ;
  @Input() offres: Offre[];
  @Output() selectedOffre = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  selectOffre(selectedOffre) {
    this.selectedOffre.emit(
      selectedOffre
    );
  }

}
