import { Component, inject } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { NavComponent } from '../../components/nav/nav.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { VideogamesService } from '../../service/videogames.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent, NavComponent, RouterLinkActive, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  videogamesService = inject(VideogamesService);
  infoGames = this.videogamesService.videogames;
}
