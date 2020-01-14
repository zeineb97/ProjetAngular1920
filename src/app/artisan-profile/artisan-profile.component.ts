import { Component } from '@angular/core';
import { ArtisanService } from '../services/artisan.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-artisan-profile',
  templateUrl: './artisan-profile.component.html',
  styleUrls: ['./artisan-profile.component.css']
})
export class ArtisanProfileComponent {
  artisanID: string = '';
  artisan: any;

  constructor(
    public auth: ArtisanService,
    private ArtisanService: ArtisanService
  ) { }
  ngOnInit() {

    var res = this.ArtisanService.returnCurrentArtisanId();

    this.artisanID = res;

    this.ArtisanService.getArtisanById(res).subscribe((artisan) => {
      this.artisan = artisan.data();
      //      console.log(this.artisan);

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
