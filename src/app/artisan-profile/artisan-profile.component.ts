import { Component } from '@angular/core';
import { ArtisanService } from '../services/artisan.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-artisan-profile',
  templateUrl: './artisan-profile.component.html',
  styleUrls: ['./artisan-profile.component.css']
})
export class ArtisanProfileComponent {
  id: string;
  artisan: any;
  constructor(
    public auth: ArtisanService,
    private ArtisanService: ArtisanService
  ) { }
  ngOnInit() {

    this.ArtisanService.getArtisanId().subscribe((user) => {
      this.id = user.uid;
    });
    setTimeout(() => {
      this.ArtisanService.getArtisanById(this.id).subscribe((artisan) => {
        this.artisan = artisan
      });

    }, 6000);
  }


}
