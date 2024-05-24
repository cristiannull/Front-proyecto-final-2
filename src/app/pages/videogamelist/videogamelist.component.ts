import { Component } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-videogamelist',
  standalone: true,
  imports: [CardsComponent, NavComponent],
  templateUrl: './videogamelist.component.html',
  styleUrl: './videogamelist.component.css',
})
export class VideogamelistComponent {
  videogames = [
    {
      title: 'Gears of war',
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
    {
      title: 'Horizon: Zero Dawn',
      price: '55',
      image:
        'https://media.vandal.net/m/26118/horizon-zero-dawn-20173114177_1.jpg',
    },

    {
      title: 'Uncharted',
      price: '47',
      image:
        'https://m.media-amazon.com/images/M/MV5BMTYzYzIxMjktMDM4NS00MTM5LWJlMDgtNDRhMDNhOGRmY2EwXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_.jpg',
    },

    {
      title: 'Forza Horizon 5',
      price: '55',
      image:
        'https://upload.wikimedia.org/wikipedia/en/8/86/Forza_Horizon_5_cover_art.jpg',
    },

    {
      title: 'EA Sport FC 24',
      price: '87',
      image:
        'https://image.api.playstation.com/vulcan/ap/rnd/202310/0214/b449973c0d7f4afc176aa1debb996b472718ce0f4175e02b.png',
    },
  ];
}
