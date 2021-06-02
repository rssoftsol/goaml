import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import {UsersService} from "../service/users.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked {

  username : string;
  role: String;

  constructor(public loginService:AuthenticationService,
              private userService:UsersService) {
  }

  ngOnInit() {
    console.log("ngOnInit called")
  }

  getRole() {
    return  this.userService.getUser(sessionStorage.getItem("username"))
      .subscribe(value => this.role = value.role);
  }

  getUsername() {
    return this.userService.getUser(sessionStorage.getItem("username"))
      .subscribe(value => this.username = value.firstName);
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy called")
  }
}
