import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class User {
  constructor(
    public emailId: string,
    public firstName: string,
    public lastName: string,
    public password: string,
    public role: string
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users : User[] = [];

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get<User[]>("http://localhost:8081/users");
  }

  public getUser(emailId : string) {
    return this.http.get<User>(`http://localhost:8081/users/${emailId}`);
  }

  public addUser(user : User) {
    console.log('Adding user')
    return this.http.post("http://localhost:8081/users", user);
    console.log(this.users)
  }

  public deleteUser(emailId : string) {
    return this.http.delete(`http://localhost:8081/users/${emailId}`);
  }

  public updateUser(user : User) {
    return this.http.put<User>("http://localhost:8081/users", user);
  }
}
