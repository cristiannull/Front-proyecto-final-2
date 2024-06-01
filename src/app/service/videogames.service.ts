import { Injectable, inject } from '@angular/core';
import { Videogame } from '../models/videogame.models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VideogamesService {
  private http = inject(HttpClient);

  constructor() {}

  getVideogames() {
    return this.http.get('http://localhost:3000/api/videogame');
  }

  getCategory() {
    return this.http.get('http://localhost:3000/api/category');
  }

  getOneVideogameById(id: string) {
    return this.http.get('http://localhost:3000/api/videogame/' + id);
  }
}
