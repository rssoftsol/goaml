import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
              private loginService: AuthenticationService) { }

  checkLogin(): void {
    this.loginService.authenticate(this.username, this.password)
      .subscribe(data => {
      if (data) {
        sessionStorage.setItem('username', data.emailId);
        sessionStorage.setItem('role', data.role);
        sessionStorage.setItem('name', data.firstName);
        if (data.role === 'user') {
          this.router.navigate([''])
        } else {
          this.router.navigate(['users'])
        }
        this.invalidLogin = false
        console.log('Login success');
      } else {
        console.log('Login failed');
        this.invalidLogin = true
      }
    })

  }

}
