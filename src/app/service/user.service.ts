import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private http=inject(HttpClient)
  constructor() { }

  login(formValues:any){
    return this.http.post("http://localhost:3000/api/auth/login", {
      email: formValues.email,
      password: formValues.password,
    })
  }
}
