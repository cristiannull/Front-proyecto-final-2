import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private http = inject(HttpClient);
  constructor() {}

  getVideogames() {
    return this.http.get('http://localhost:3000/api/videogame');
  }

  getGender() {
    return this.http.get('http://localhost:3000/api/genders');
  }

  getTheme() {
    return this.http.get('http://localhost:3000/api/themes');
  }

  getGameMode() {
    return this.http.get('http://localhost:3000/api/gamemodes');
  }

  getPegi() {
    return this.http.get('http://localhost:3000/api/pegis');
  }

  getProducts(filter?: string, value?: string) {
    let endpoint = 'http://localhost:3000/api/videogame';
    if (filter && value) {
      endpoint = `${endpoint}?${filter}=${value}`;
    }
    return this.http.get(endpoint);
  }

  getVideogameSearch(name?: String) {
    let endpoint = 'http://localhost:3000/api/videogame/';
    if (name) {
      endpoint = `${endpoint}${name}`;
    }

    return this.http.get(endpoint);
  }
}
