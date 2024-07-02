import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, Rol } from '../models/User.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  constructor() {}

  getUserById(id: string): Observable<any> {
    const token = localStorage.getItem('user_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<User[]>('http://localhost:3000/api/users/' + id, {
      headers,
    });
  }

  getRol() {
    return this.http.get<Rol[]>('http://localhost:3000/api/rol');
  }

  updateUser(id: string, data: User) {
    const token = localStorage.getItem('user_token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch('http://localhost:3000/api/users/' + id, data, {
      headers,
    });
  }

  register(formValues: User) {
    return this.http.post('http://localhost:3000/api/auth/register', {
      firstname: formValues.firstname,
      lastname: formValues.lastname,
      age: formValues.age,
      email: formValues.email,
      password: formValues.password,
    });
  }

  login(formValues: any) {
    return this.http.post('http://localhost:3000/api/auth/login', {
      email: formValues.email,
      password: formValues.password,
    });
  }

  isLogged() {
    if (localStorage.getItem('user_token')) {
      return true;
    } else {
      return false;
    }
  }
}
