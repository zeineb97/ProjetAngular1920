import {Component, OnInit} from '@angular/core';
import { ArtisanService } from '../services/artisan.service';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AvisComponent} from '../avis/avis.component';
import {Avis} from '../model/avis';
import {AvisService} from '../services/avis.service';
import { DemandeurService } from '../services/demandeur.service';
import {forEachComment} from "tslint";
import {Offre} from "../model/Offre";


@Component({
  selector: 'app-artisan-profile',
  templateUrl: './artisan-profile.component.html',
  styleUrls: ['./artisan-profile.component.css']
})
export class ArtisanProfileComponent implements OnInit {
  artisanID: string ;
  artisan: any;
  avisTab: Array<Avis> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private ArtisanService: ArtisanService,
    private router: Router,
    private avisService: AvisService,
    private demandeurService: DemandeurService
  ) { }
  ngOnInit() {
    // var res = this.ArtisanService.returnCurrentArtisanId();
    // this.artisanID = res;
    this.activatedRoute.params.subscribe((params) => {
      this.artisanID = params.id;
    });

    this.ArtisanService.getArtisanById(this.artisanID).subscribe((artisan) => {
      this.artisan = artisan.data();
      //     console.log(this.artisan);

    });
    this.avisService.getAvisById(this.artisanID).subscribe( (querySnapshot) => {
      for ( const avis of querySnapshot.docs) {
        const demandeurId = avis.get('demandeurId');
        const demandeurName = avis.get('demandeurName');
        const texte = avis.get('texte');
        const a = new Avis(demandeurId, demandeurName, texte);
        // console.log(o);
        this.avisTab.push(a);
      }
      console.log(this.avisTab);
    });

  }
  ajouterOffre() {
    this.router.navigate(['addoffre']);
  }
  myProfil() {
    return (this.artisanID === localStorage.getItem('token'));
  }
  loggedAsdemandeur() {
    return (localStorage.getItem('role') === 'demandeur');
  }
  donneravis(formulaire: NgForm) {
    const idDemandeur = localStorage.getItem('token');
    this.demandeurService.getDemandeurById(idDemandeur).subscribe((demandeur) => {
      const d = demandeur.data();
      const demandeurName = d.displayName;
      console.log(formulaire.value.avis);
      const avis = new Avis(idDemandeur, demandeurName, formulaire.value.avis);
      this.avisService.ajouterAvis(avis, this.artisanID);
    });



  }
  /*
    completeArtisan(artisan, formulaire: NgForm) {
      console.log(artisan, formulaire.value);

      this.ArtisanService.updateArtisan(artisan, formulaire.value);
      console.log(artisan.complete);
    }
  */
  /*idArtisan(artisan) {
    this.ArtisanService.getArtisanById(artisan);

  }*/

  /*
  currentArtisan() {
    var res = this.ArtisanService.returnCurrentArtisanId();

    this.artisanID = res;

    this.ArtisanService.getArtisanById(res).subscribe((artisan) => {
      this.artisan = artisan


    });
  }
  */

}
