import { Component, OnInit } from '@angular/core';
import {Offre} from '../../model/Offre';
import {OffreService} from '../../services/offre.service';
declare var $: any;
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  offres: Array<Offre> = [] ;
  selectedOffre: Offre;
  constructor(private offreSer: OffreService ) { }

  ngOnInit() {
    this.offreSer.getAllOffres().subscribe( (querySnapshot) => {
      for ( const offre of querySnapshot.docs) {
        const artisanId = offre.get('artisanId');
        const nom = offre.get('nom');
        const description = offre.get('description');
        const imagePrincipal = offre.get('imagePrincipal');
        const imagesList = offre.get('imagesList');
        const prix = offre.get('prix');
        const o = new Offre(artisanId, nom, description, imagePrincipal, imagesList, prix);
       // console.log(o);
        this.offres.push(o);
      }
     // console.log(this.offres);
    });

  }

  selectOffre(offre)  {
    this.selectedOffre = offre; }
}
