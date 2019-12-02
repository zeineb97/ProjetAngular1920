import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  constructor(
    public firebaseService: FirebaseService
  ) { }

  ngOnInit() {
  }
  addUser(formulaire: NgForm) {
    this.firebaseService.createUser(formulaire);

  }

}
