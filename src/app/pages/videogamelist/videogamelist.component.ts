import { Component, inject, signal } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { NavComponent } from '../../components/nav/nav.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { VideogamesService } from '../../service/videogames.service';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-videogamelist',
  standalone: true,
  imports: [
    CardsComponent,
    NavComponent,
    RouterLinkActive,
    RouterLink,
    FooterComponent,
  ],
  templateUrl: './videogamelist.component.html',
  styleUrl: './videogamelist.component.css',
})
export class VideogamelistComponent {
  private videogamesService = inject(VideogamesService);

  videogames = signal<any>([]);

  ngOnInit() {
    console.warn(
      '[ngOnInit] El componente lista de videojuegos ha sido inicializado'
    );
    this.videogamesService.getVideogames().subscribe({
      next: (videogames) => {
        this.videogames.set(videogames);
      },
    });
  }
}
