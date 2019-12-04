import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from '../../model/User';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  //user: User = new User(0, '', '', '', 22222222, '', '', '', '', false, false);
  //submitted = false;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }



  addUser(formulaire: NgForm) {
    this.userService.createUser(formulaire.value);

  }

}
