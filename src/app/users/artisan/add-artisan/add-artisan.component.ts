import { Component, OnInit } from '@angular/core';
import { ArtisanService } from '../../../services/Artisan.service';
import { NgForm } from '@angular/forms';
import { Artisan } from '../../../model/Artisan';

@Component({
  selector: 'app-add-artisan',
  templateUrl: './add-artisan.component.html',
  styleUrls: ['./add-artisan.component.css']
})
export class AddArtisanComponent implements OnInit {

  constructor(
    private ArtisanService: ArtisanService
  ) {

  }

  ngOnInit() {
  }

  addArtisan(formulaire: NgForm) {
    this.ArtisanService.createArtisan(formulaire.value);

  }

}
