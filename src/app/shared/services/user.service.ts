import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;
  dataUser:any;
  baseUrl = environment.baseUrl

  constructor(private http:HttpClient) {
    /* this.user = {
      email: 'silva@prueba.com',
      pass: '12345678',
    }; */
  }

  public onLogin(user: User) {
    const data = {
      username: user.email,
      password: user.pass
    };
    return this.http.post(`${this.baseUrl}/login`, data);

    /* if (user.email == this.user.email && user.pass == this.user.pass) {
      return true;
    } else {
      return false;
    } */
  }
}
