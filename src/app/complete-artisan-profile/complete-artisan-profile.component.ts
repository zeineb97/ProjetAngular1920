import { Component, OnInit } from '@angular/core';
import { ArtisanService } from '../services/artisan.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-complete-artisan-profile',
  templateUrl: './complete-artisan-profile.component.html',
  styleUrls: ['./complete-artisan-profile.component.css']
})
export class CompleteArtisanProfileComponent implements OnInit {
  //artisanID: string = '';
  constructor(
    public auth: ArtisanService,
    private ArtisanService: ArtisanService
  ) { }

  ngOnInit() {



  }
  onClick() {
    this.auth.signOut();


  }
  /* currentArtisan() {
     var res = this.ArtisanService.returnCurrentArtisanId();
 
     this.artisanID = res;
 
   }*/

}
