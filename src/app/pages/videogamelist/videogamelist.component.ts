import { Component, inject } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { NavComponent } from '../../components/nav/nav.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { VideogamesService } from '../../service/videogames.service';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-videogamelist',
  standalone: true,
  imports: [CardsComponent, NavComponent, RouterLinkActive, RouterLink, FooterComponent],
  templateUrl: './videogamelist.component.html',
  styleUrl: './videogamelist.component.css',
})
export class VideogamelistComponent {
  videogamesService = inject(VideogamesService);
  infoGames = this.videogamesService.videogames;
}
