import { Injectable } from '@angular/core';
import {User, UsersService} from './users.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private usersService : UsersService,
              private http: HttpClient) { }

  authenticate(username, password) {
    return this.http.post<User>("http://localhost:8081/login", {emailId: username, password: password});
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
