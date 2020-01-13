import { Component, OnInit } from '@angular/core';
import {Offre} from '../../model/Offre';
declare var $: any;
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  offres: Array<Offre> = [] ;
  selectedOffre: Offre;
  constructor() { }

  ngOnInit() {
    const o1 = new Offre(1, 'bricoleur', 'Service de plomberie', 'assets/Images/exp1.jpg', ['assets/Images/exp1.jpg', 'assets/Images/exp1.jpg', 'assets/Images/exp1.jpg'], 25, 1);
    const o2 = new Offre(2, 'transporteur', 'Service de transport', 'assets/Images/accueil1.jpg', ['assets/Images/exp1.jpg', 'assets/Images/exp1.jpg', 'assets/Images/exp1.jpg'], 25, 1);
    const o3 = new Offre(3, 'plombier', 'Service de plomberie', 'assets/Images/accueil0.jpg', ['assets/Images/exp1.jpg', 'assets/Images/exp1.jpg', 'assets/Images/exp1.jpg'], 25, 1);
    this.offres.push(o1);
    this.offres.push(o2);
    this.offres.push(o3);
    this.offres = [
      new Offre(1, 'bricoleur', 'Service de plomberie', 'assets/Images/exp1.jpg', ['assets/Images/exp1.jpg', 'assets/Images/exp1.jpg', 'assets/Images/exp1.jpg'], 25),
      new Offre(2, 'transporteur', 'Service de transport', 'assets/Images/accueil1.jpg', ['assets/Images/exp1.jpg', 'assets/Images/exp1.jpg', 'assets/Images/exp1.jpg'], 25),
      new Offre(3, 'plombier', 'Service de plomberie', 'assets/Images/accueil0.jpg', ['assets/Images/exp1.jpg', 'assets/Images/exp1.jpg', 'assets/Images/exp1.jpg'], 25),
      new Offre(4, 'plombier', 'Service de plomberie', 'assets/Images/accueil3.jpg', ['assets/Images/exp1.jpg', 'assets/Images/exp1.jpg', 'assets/Images/exp1.jpg'], 25),
      new Offre(5, 'mécanicien', 'Service de plomberie', 'assets/Images/exp2.jpg', ['assets/Images/exp1.jpg', 'assets/Images/exp1.jpg', 'assets/Images/exp1.jpg'], 25)
    ];
  }
  selectOffre(offre)  {
    this.selectedOffre = offre; }
}
