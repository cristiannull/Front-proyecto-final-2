import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Videogames } from '../store/cards.store';
import { map } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideogamesService {
  private http = inject(HttpClient);

  constructor() {}

  getVideogames(): Observable<any> {
    return this.http.get('http://3.136.87.251:3000/api/videogame');
  }

  private apiUrl = 'http://3.136.87.251:3000/api/videogame';

  loadCards(page: number, limit: number) {
    return this.http
      .get<{
        data: Videogames[];
        pagination: {
          totalItems: number;
          totalPages: number;
          currentPage: number;
          nextPage: string;
        };
      }>(`${this.apiUrl}?page=${page}&limit=${limit}`)
      .pipe(map((response) => response));
  }

  getOneVideogameByName(id: string) {
    return this.http.get('http://3.136.87.251:3000/api/videogamebyid/' + id);
  }

  getVideogamesOfFeatured() {
    return this.http.get(
      'http://3.136.87.251:3000/api/videogame?typeoffer=Featured'
    );
  }

  getVideogamesOfOnSale() {
    return this.http.get(
      'http://3.136.87.251:3000/api/videogame?typeoffer=On Sale'
    );
  }
}
