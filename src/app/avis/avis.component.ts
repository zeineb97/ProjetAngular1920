import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Avis} from "../model/avis";
import {AvisService} from "../services/avis.service";


@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  @Input() idArtisan: string;
  constructor(private avisService: AvisService) { }

  ngOnInit() {
  }


}
