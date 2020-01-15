import { Component, OnInit } from '@angular/core';
import { ArtisanService } from '../services/artisan.service';
import { NgForm } from '@angular/forms';
import {Artisan} from "../model/Artisan";
import {Router} from "@angular/router";

@Component({
  selector: 'app-complete-artisan-profile',
  templateUrl: './complete-artisan-profile.component.html',
  styleUrls: ['./complete-artisan-profile.component.css']
})
export class CompleteArtisanProfileComponent implements OnInit {
  artisan: any;
  artisanID :string ;
  constructor(
    public auth : ArtisanService,
    private artisanService: ArtisanService,
    private router: Router
  ) { }

  ngOnInit() {
    this.artisanID = localStorage.getItem('token');
    this.artisanService.getArtisanById(this.artisanID).subscribe((artisan) => {
      this.artisan = artisan.data();
    });
  }
  /* currentArtisan() {
     var res = this.ArtisanService.returnCurrentArtisanId();

     this.artisanID = res;

   }*/

  completeArtisan(formulaire: NgForm) {
    this.artisanService.updateArtisan(this.artisan, formulaire.value).then(() => {
      const link = ['profilartisan', this.artisanID];
      this.router.navigate(link);
    }).catch(() => {console.log('error')});

  }
}
