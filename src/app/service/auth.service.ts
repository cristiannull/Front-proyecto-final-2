import { Injectable, inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  private readonly API_URL = 'http://18.221.10.95:3000/api';
  constructor(private http: HttpClient) {}

  setToken(token: string) {
    localStorage.setItem('user_token', token);
    return;
  }

  removeToken() {
    localStorage.removeItem('user_token');
    return;
  }

  getToken1(): string | null {
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
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.API_URL}/login`, { email, password }).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.token);
        return response;
      }),
      catchError((error) => {
        return of({ error: error.message });
      })
    );
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.API_URL}/register`, user).pipe(
      map((response: any) => {
        localStorage.setItem('token', response.token);
        return response;
      }),
      catchError((error) => {
        return of({ error: error.message });
      })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
