import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Avis} from "../model/avis";


@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  @Input() avisTab: Avis[];
  constructor() { }

  ngOnInit() {
  }


}
