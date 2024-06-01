import { Injectable, signal, inject } from '@angular/core';
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

  getOneVideogameById(id: string) {
    return this.http.get('http://localhost:3000/api/videogame/' + id);
  }

  /* getOneVideogameById(id: string) {
    const videogame = this.videogames().find(
      (videogame: Videogame) => id === videogame.id
    );
    if (videogame !== undefined) {
      return videogame;
    } else {
      return null;
    }
  }
  create(videogame: any) {
    this.videogames.update(function (state) {
      return [...state, videogame];
    });
  } */
}
