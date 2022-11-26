
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { NewUser } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {

  googleUserToken: string;
  constructor( private http: HttpClient) { }

  getUser(id: number): Observable<User> {
    return this.http.get<User>('http://localhost:3000/userdata/'+id);
  }

  loginUser(newUser: NewUser): Observable<string> {
    return this.http.post<string>('http://localhost:3000/loginUser', newUser);
  }

  newUser(newUser: NewUser): Observable<User> {
    return this.http.post<User>('http://localhost:3000/newuser', newUser);
  }

  setUserToken(token: string){
    this.googleUserToken = token;
    console.log(this.googleUserToken);
  }

  getUserToken(){
    console.log(this.googleUserToken);
    return this.googleUserToken;
  }
}
