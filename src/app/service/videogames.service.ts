import { Injectable, signal } from '@angular/core';
import { Videogame } from '../models/videogame.models';

@Injectable({
  providedIn: 'root',
})
export class VideogamesService {
  constructor() {}
  videogames = signal([
    {
      id:  "1",
      title: 'Gears of war',
      price: '20',

      image:
        'https://www.neoteo.com/wp-content/uploads/2016/09/Gears-of-War-4-1.jpg',
        
      category: 'Third-person shooter video game',
      developer: 'Epic Games',
      gender: 'action',
      pegi: '17 years and older',
      theme: 'The main theme of Gears of War is survival in an apocalyptic war between humanity and the subterranean creatures known as the Locust, with a strong emphasis on the camaraderie and sacrifice of the soldiers fighting to save their world',
      paymentMethod: 'Digital platforms, Credit/debit cards'
    },

    {
      id:  "2",
      title: 'Call of Duty MW III',
      price: '35',
      image:
        'https://assets.xboxservices.com/assets/ff/26/ff265ed9-6adf-4618-997d-38b5beab7557.jpg?n=CoD-Modern-Warfare-III-PC-Battle.net-Standard_1440x2160.jpg',
        
      category: 'First-person shooter video game',
      developer: 'Infinity Ward and Sledgehammer Games.',
      gender: 'action',
      pegi: '18 years and older',
      theme: 'Modern warfare, military combat, terrorism, and special operations',
      paymentMethod: 'Digital platforms, Credit/debit cards'
    },

    {
      id:  "3",
      title: 'God of war',
      price: '100',
      image:
        'https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7',

      category: 'Action and adventure video game',
      developer: 'Santa Monica Studio',
      gender: 'First-person shooting, Action.',
      pegi: '18 years and older',
      theme: 'Mythology (mainly Greek and Norse in the different games), revenge, fatherhood, and redemption',
      paymentMethod: 'Digital platforms, Credit/debit cards'
    },

    {
      id:  "4",
      title: 'Doom',
      price: '45',
      image:
        'https://image.api.playstation.com/vulcan/ap/rnd/202010/0114/b4Q1XWYaTdJLUvRuALuqr0wP.png',

      category: 'First-person shooter video game',
      developer: 'id Software',
      gender: 'First-person shooting, Action.',
      pegi: '18 years and older',
      theme: 'Science fiction, horror, combat against demons, and survival in a hellish environment',
      paymentMethod: 'Digital platforms, Credit/debit cards'
    },
  ]);


getOneVideogameById(id: string) {
  const videogame = this.videogames().find((videogame: Videogame) => id === videogame.id);
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
}
}
