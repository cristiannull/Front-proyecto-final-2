import { Injectable, inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);

  constructor() {}

  setToken(token: string) {
    localStorage.setItem('user_token', token);
    return;
  }

  removeToken() {
    localStorage.removeItem('user_token');
    return;
  }

  getToken(): string | null {
    return localStorage.getItem('user_token');
  }

  getUserIdFromToken(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);
      return decodedToken.sub;
    }
    return null;
  }

  navigateToProfile(): void {
    const userId = this.getUserIdFromToken();
    if (userId) {
      this.router.navigate(['/user', userId]);
    }
  }
}
