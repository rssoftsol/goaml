import { Component, OnInit } from '@angular/core';
import {UsersService} from "../service/users.service";

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  password : string;
  confirmPassword : string;
  passwordMatch = true;
  successfullUpdate = false;

  constructor(private userService : UsersService) { }

  ngOnInit(): void {
  }

  changePassword() {
    if (this.password === this.confirmPassword) {
      this.userService.getUser(sessionStorage.getItem("username")).subscribe(user => {
        user.password = this.password;
        this.userService.updateUser(user);
        this.successfullUpdate = true;
      })
    } else {
      this.passwordMatch = false;
    }
  }
}
