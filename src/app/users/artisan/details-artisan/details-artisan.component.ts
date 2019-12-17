import { Component, OnInit, Input } from '@angular/core';
import { ArtisanService } from '../../../services/Artisan.service';
import { Artisan } from '../../../model/Artisan';


@Component({
  selector: 'app-details-artisan',
  templateUrl: './details-artisan.component.html',
  styleUrls: ['./details-artisan.component.css']
})
export class DetailsArtisanComponent implements OnInit {


  @Input() artisan: Artisan;

  constructor(private ArtisanService: ArtisanService) { }

  ngOnInit() {
  }




}
