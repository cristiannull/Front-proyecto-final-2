import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  setToken(token: string) {
    localStorage.setItem('user_token', token);
    return;
  }

  removeToken() {
    localStorage.removeItem('user_token');
    return;
  }
}
