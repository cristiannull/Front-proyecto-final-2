import {
  Component,
  inject,
  Input,
  signal,
  CUSTOM_ELEMENTS_SCHEMA,
  SimpleChanges,
} from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { VideogamesService } from '../../service/videogames.service';
import { CurrencyPipe } from '@angular/common';
import { NgClass, CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../safe-url.pipe';
import { FooterComponent } from '../../components/footer/footer.component';
import { SkeletonModule } from 'primeng/skeleton';
import { CartService } from '../../service/cart.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    SkeletonModule,
    FooterComponent,
    CommonModule,
    NavComponent,
    CurrencyPipe,
    NgClass,
    SafeUrlPipe,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DetailComponent {
  private videogamesService = inject(VideogamesService);
  private cartService = inject(CartService);

  videogame = signal<any>({});
  videogames = signal<any>({});
  isLoading: boolean = true;
  data: any;
  @Input() id: string = '';
  @Input() filterBy: string = '';
  @Input() filterValue: string = '';
  @Input() name: string = '';

  ngOnInit() {
    console.warn('[ngOnInit] Se ha inicializado el componente Detail');
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
    this.videogamesService.getOneVideogameByName(this.id).subscribe({
      next: (videogame) => {
        this.videogame.set(videogame);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['name'] || changes['id']) {
      this.videogamesService.getOneVideogameByName(this.id).subscribe({
        next: (videogame) => {
          this.videogame.set(videogame);
        },
      });
    }
  }

  addToCart(videogame: any) {
    this.cartService.addToCart(videogame);
  }
}
