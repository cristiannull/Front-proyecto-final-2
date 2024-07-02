import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) {}

  getOrdersByUser(userId: string): Observable<any> {
    const token = localStorage.getItem('user_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const endpoint = `${this.apiUrl}/shoops?user=${userId}`; // Remove extra "/api" from endpoint
    return this.http.get(endpoint, { headers });
  }
}
