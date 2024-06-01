import { Component, SimpleChanges, inject, signal } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { NavComponent } from '../../components/nav/nav.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { VideogamesService } from '../../service/videogames.service';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardsComponent,
    NavComponent,
    RouterLinkActive,
    RouterLink,
    FooterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private videogamesService = inject(VideogamesService);

  videogames = signal<any>([]);
  featuredVideogames = signal<any>([]);
  saleVideogames = signal<any>([]);

  ngOnInit() {
    console.warn(
      '[ngOnInit] El componente lista de videojuegos ha sido inicializado'
    );
    this.videogamesService.getVideogames().subscribe({
      next: (videogames: any) => {
        console.log(videogames.data);
        this.videogames.set(videogames.data);
        this.setFeaturedVideogames(4);
        this.setSaleVideogames(4);
      },
    });
  }

  setFeaturedVideogames(quantity: number) {
    this.featuredVideogames.set(this.videogames().slice(0, quantity));
  }
  setSaleVideogames(quantity: number) {
    this.saleVideogames.set(this.videogames().slice(0, quantity));
  }
}
