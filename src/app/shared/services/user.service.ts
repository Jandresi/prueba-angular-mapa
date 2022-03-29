import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;

  constructor() {
    this.user = {
      name: 'SILVA',
      email: 'silva@prueba.com',
      pass: '12345678',
    };
  }

  public onLogin(user: User): boolean {
    if (user.email == this.user.email && user.pass == this.user.pass) {
      return true;
    } else {
      return false;
    }
  }
}
