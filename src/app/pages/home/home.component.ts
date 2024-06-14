import { Component, inject, signal } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { NavComponent } from '../../components/nav/nav.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { VideogamesService } from '../../service/videogames.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { CartService } from '../../service/cart.service';

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
  private cartService = inject(CartService)

  videogames = signal<any>([]);
  featuredVideogames = signal<any>([]);
  saleVideogames = signal<any>([]);
  featuredvideogames = signal<any>([]);
  onsalevideogames = signal<any>([]);

  ngOnInit() {
    console.warn(
      '[ngOnInit] El componente lista de videojuegos ha sido inicializado'
    );
    this.videogamesService.getVideogamesOfFeatured().subscribe({
      next: (videogames: any) => {
        this.featuredvideogames.set(videogames.data.slice(0, 20));
      },
    });
    this.videogamesService.getVideogamesOfOnSale().subscribe({
      next: (videogames: any) => {
        this.onsalevideogames.set(videogames.data.slice(0, 10));
      },
    });

  }

  nextGame() {
    const tarjetas = document.getElementById('tarjetas');
    tarjetas?.scrollTo({
      left: tarjetas.scrollLeft + tarjetas.offsetWidth,
      behavior: 'smooth',
    });
  }

  prevGame() {
    const tarjetas = document.getElementById('tarjetas');
    tarjetas?.scrollTo({
      left: tarjetas.scrollLeft - tarjetas.offsetWidth,
      behavior: 'smooth',
    });
  }

  nextOnSaleGame() {
    const tarjetas = document.getElementById('tarjetas-on-sale');
    tarjetas?.scrollTo({
      left: tarjetas.scrollLeft + tarjetas.offsetWidth,
      behavior: 'smooth',
    });
  }

  prevOnSaleGame() {
    const tarjetas = document.getElementById('tarjetas-on-sale');
    tarjetas?.scrollTo({
      left: tarjetas.scrollLeft - tarjetas.offsetWidth,
      behavior: 'smooth',
    });
  }

  addToCart(videogame: any) {
    console.log(videogame);
    
    this.cartService.addToCart(videogame)
  }
}
