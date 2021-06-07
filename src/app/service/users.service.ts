import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8081/users');
  }

  public getUser(emailId: string): Observable<User> {
    return this.http.get<User>(`http://localhost:8081/users/${emailId}`);
  }

  public addUser(user: User): Observable<any> {
    return this.http.post('http://localhost:8081/users', user);
  }

  public deleteUser(emailId: string): Observable<any> {
    return this.http.delete(`http://localhost:8081/users/${emailId}`);
  }

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>('http://localhost:8081/users', user);
  }
}
