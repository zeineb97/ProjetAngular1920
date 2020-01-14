import { Component } from '@angular/core';
import { ArtisanService } from '../services/artisan.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-complete-artisan-profile',
  templateUrl: './complete-artisan-profile.component.html',
  styleUrls: ['./complete-artisan-profile.component.css']
})
export class CompleteArtisanProfileComponent {
  constructor(
    public auth: ArtisanService,
    private ArtisanService: ArtisanService
  ) { }

  completeArtisan(artisan, formulaire: NgForm) {
    console.log(artisan, formulaire.value);

    this.ArtisanService.updateArtisan(artisan, formulaire.value);
    console.log(artisan.complete);
  }


}
