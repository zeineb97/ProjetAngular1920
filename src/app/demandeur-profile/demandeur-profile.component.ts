import { Component } from '@angular/core';
import { DemandeurService } from '../services/demandeur.service';
@Component({
  selector: 'app-demandeur-profile',
  templateUrl: './demandeur-profile.component.html',
  styleUrls: ['./demandeur-profile.component.css']
})
export class DemandeurProfileComponent {

  constructor(public auth: DemandeurService) { }

  ngOnInit() {
  }

}
