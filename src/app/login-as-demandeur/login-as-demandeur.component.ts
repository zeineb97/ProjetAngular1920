import { Component, OnInit } from '@angular/core';
import { DemandeurService } from '../services/demandeur.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-as-demandeur',
  templateUrl: './login-as-demandeur.component.html',
  styleUrls: ['./login-as-demandeur.component.css']
})
export class LoginAsDemandeurComponent implements OnInit {

  constructor(private auth: DemandeurService,private router:Router) { }

  ngOnInit() {
  }

  login() {
    this.auth.googleLogin().then(()=>{
      this.router.navigate(['profildemandeur']);
    });
  }

}
