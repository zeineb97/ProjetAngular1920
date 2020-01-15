import { Component, OnInit } from '@angular/core';
import {ArtisanService} from "../services/artisan.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-as-artisan',
  templateUrl: './login-as-artisan.component.html',
  styleUrls: ['./login-as-artisan.component.css']
})
export class LoginAsArtisanComponent implements OnInit {

  constructor(private auth: ArtisanService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.auth.googleLogin().then(() => {
      if (localStorage.getItem('complete') === 'true') {
        const token = localStorage.getItem('token');
        const link = ['profilartisan', token];
        this.router.navigate(link);
      } else {
        const link = ['cc'];
        this.router.navigate(link);
      }
    });
  }

}
