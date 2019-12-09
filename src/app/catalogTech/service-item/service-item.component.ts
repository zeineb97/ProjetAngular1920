import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Offre} from '../../model/Offre';
declare var myfunction: any;
@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {
  @Input() offre: Offre;
  @Output() selectedOffre = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onClickbtn() {
    myfunction();
  }
  selectOffre()  {
     this.selectedOffre.emit(this.offre);
  }

}
