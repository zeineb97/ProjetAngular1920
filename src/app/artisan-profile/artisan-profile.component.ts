import {Component, OnInit} from '@angular/core';
import { ArtisanService } from '../services/artisan.service';
import { NgForm } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-artisan-profile',
  templateUrl: './artisan-profile.component.html',
  styleUrls: ['./artisan-profile.component.css']
})
export class ArtisanProfileComponent implements OnInit {
  artisanID: string = '';
  artisan: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ArtisanService: ArtisanService,
    private router:Router
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

  }
  ajouterOffre() {
    this.router.navigate(['addoffre']);
  }
  myProfil() {
    return (this.artisanID === localStorage.getItem('token'));
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
