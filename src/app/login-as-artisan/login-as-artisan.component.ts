import { Component, OnInit } from '@angular/core';
import {ArtisanService} from '../services/artisan.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-as-artisan',
  templateUrl: './login-as-artisan.component.html',
  styleUrls: ['./login-as-artisan.component.css']
})
export class LoginAsArtisanComponent implements OnInit {

  c: string;
  token: string;
  constructor(private auth: ArtisanService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.auth.googleLogin().then(() => {
      /*const id = localStorage.getItem('token');
      this.router.navigate(['profilartisan', id]);*/
      /*if (localStorage.getItem('complete') === 'true') {
        const token = localStorage.getItem('token');
        const link = ['profilartisan', token];
        this.router.navigate(link);
      } else {
        const link = ['cc'];
        this.router.navigate(link);
      }*/

    }).then(() =>{
      setTimeout(()=> {
        this.c = localStorage.getItem('complete');
        this.token = localStorage.getItem('token');
        console.log(this.c);
        if (this.c === 'true'){
          this.router.navigate(['profilartisan',this.token]);
        }
        else
          this.router.navigate(['completeprofile']);
      },1000);
    });
  }

}
