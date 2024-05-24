import { Component } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent, NavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  videogames = [
    {
      title: 'Gears of war 4',
      price: '20',
      image:
        'https://www.neoteo.com/wp-content/uploads/2016/09/Gears-of-War-4-1.jpg',
    },

    {
      title: 'Call of Duty MW III',
      price: '35',
      image:
        'https://assets.xboxservices.com/assets/ff/26/ff265ed9-6adf-4618-997d-38b5beab7557.jpg?n=CoD-Modern-Warfare-III-PC-Battle.net-Standard_1440x2160.jpg',
    },

    {
      title: 'God of war',
      price: '100',
      image:
      'https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7',
    },

    {
      title: 'Doom',
      price: '45',
      image:
        'https://image.api.playstation.com/vulcan/ap/rnd/202010/0114/b4Q1XWYaTdJLUvRuALuqr0wP.png',
    },
  ];
}
