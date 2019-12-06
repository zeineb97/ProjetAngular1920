import { Component, OnInit } from '@angular/core';
import {Offre} from '../../model/Offre';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  offres: Offre [] ;
  selectedOffre: Offre;
  constructor() { }

  ngOnInit() {
    this.offres = [
      new Offre(1, 'bricoleur', 'Service de plomberie', 'assets/Images/exp1.jpg', [], 25, 1),
      new Offre(2, 'transporteur', 'Service de transport', 'assets/Images/accueil1.jpg', [], 25, 1),
      new Offre(3, 'plombier', 'Service de plomberie', 'assets/Images/accueil0.jpg', [], 25, 1),
      new Offre(4, 'plombier', 'Service de plomberie', 'assets/Images/accueil3.jpg', [], 25, 1),
      new Offre(5, 'mécanicien', 'Service de plomberie', 'assets/Images/exp2.jpg', [], 25, 1)
    ];
  }
  selectOffre(offre)  {
    this.selectedOffre = offre; }

}
