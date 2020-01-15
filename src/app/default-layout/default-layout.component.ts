import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ArtisanService} from "../services/artisan.service";
@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {

  constructor(private artisanService: ArtisanService, private router: Router) {

  }

  ngOnInit() {

  }
  goToDemandeur() {
    const link = ['demandeurlogin'];
    this.router.navigate(link);
  }
  goToArtisan() {
    const link = ['artisanlogin'];
    this.router.navigate(link);
  }
  logOut() {
    this.artisanService.signOut();
  }
  authenticated() {
    const token = localStorage.getItem('token');

    return(!!token);
  }
  myProfil(){
    const id = localStorage.getItem('token');
    if (localStorage.getItem('role')==='artisan')
      this.router.navigate(['profilartisan', id]);
    if (localStorage.getItem('role')==='demandeur')
      this.router.navigate(['profildemandeur'])
  }
}
