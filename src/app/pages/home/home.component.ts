import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { NavComponent } from '../../components/nav/nav.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { VideogamesService } from '../../service/videogames.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { SkeletonModule } from 'primeng/skeleton';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-home',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CardsComponent,
    NavComponent,
    RouterLinkActive,
    RouterLink,
    FooterComponent,
    SkeletonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private videogamesService = inject(VideogamesService);

  videogames = signal<any>([]);
  featuredVideogames = signal<any>([]);
  saleVideogames = signal<any>([]);
  featuredvideogames = signal<any>([]);
  onsalevideogames = signal<any>([]);
  isLoading: boolean = true;
  data: any;

  ngOnInit() {
    console.warn(
      '[ngOnInit] El componente lista de videojuegos ha sido inicializado'
    );
    this.videogamesService.getVideogames().subscribe({
      next: (response) => {
        this.data = response;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading data', error);
        this.isLoading = false;
      },
    });
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
}
