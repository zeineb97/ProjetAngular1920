import {Component, OnInit} from '@angular/core';
import { DemandeurService } from '../services/demandeur.service';
@Component({
  selector: 'app-demandeur-profile',
  templateUrl: './demandeur-profile.component.html',
  styleUrls: ['./demandeur-profile.component.css']
})
export class DemandeurProfileComponent implements OnInit{

  demandeurId:string;
  demandeur: any;
  constructor(private demandeurService: DemandeurService) { }

  ngOnInit () {
    this.demandeurId = localStorage.getItem('token');
    this.demandeurService.getDemandeurById(this.demandeurId).subscribe((demandeur) => {
      this.demandeur = demandeur.data();
    });

  }

}
