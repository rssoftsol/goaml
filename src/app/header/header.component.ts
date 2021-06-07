import {Component} from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  username: string;
  role: string;

  constructor(public loginService: AuthenticationService) {
  }

  getRole(): string {
    return sessionStorage.getItem('role');
  }

  getUsername(): string {
    return sessionStorage.getItem('name');
  }

}
