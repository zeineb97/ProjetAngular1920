import { Component, OnInit } from '@angular/core';
import { ArtisanService } from '../../../services/Artisan.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-list-artisan',
  templateUrl: './list-artisan.component.html',
  styleUrls: ['./list-artisan.component.css']
})
export class ListArtisanComponent implements OnInit {

  artisans: any;

  constructor(private artisanService: ArtisanService) { }

  ngOnInit() {
    //this.getArtisansList();
  }
  /*
    getArtisansList() {
      this.artisanService.getArtisansList().snapshotChanges().pipe(
        map(changes =>
          changes.map(c =>
            ({ key: c.payload.doc.id, ...c.payload.doc.data() })
          )
        )
      ).subscribe(artisans => {
        this.artisans = artisans;
      });
    }
  */

}
