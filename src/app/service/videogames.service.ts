import { Injectable, inject } from '@angular/core';
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

  getOneVideogameByName(name: string) {
    return this.http.get('http://localhost:3000/api/videogamebyid/' + name);
  }

  getVideogamesOfFeatured() {
    return this.http.get(
      'http://localhost:3000/api/videogame?typeoffer=Featured'
    );
  }

  getVideogamesOfOnSale() {
    return this.http.get(
      'http://localhost:3000/api/videogame?typeoffer=On Sale'
    );
  }
}
