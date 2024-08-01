import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Videogames } from '../store/cards.store';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideogamesService {
  private http = inject(HttpClient);

  constructor() {}

  getVideogames() {
    return this.http.get('http://18.216.177.93:3000/api/videogame');
  }

  private apiUrl = 'http://18.216.177.93:3000/api/videogame';

  loadCards(page: number) {
    return this.http
      .get<{ data: Videogames[] }>(`${this.apiUrl}?page=${page}&limit=12`)
      .pipe(map((response) => response.data));
  }

  getOneVideogameByName(id: string) {
    return this.http.get('http://18.216.177.93:3000/api/videogamebyid/' + id);
  }

  getVideogamesOfFeatured() {
    return this.http.get(
      'http://18.216.177.93:3000/api/videogame?typeoffer=Featured'
    );
  }

  getVideogamesOfOnSale() {
    return this.http.get(
      'http://18.216.177.93:3000/api/videogame?typeoffer=On Sale'
    );
  }
}
