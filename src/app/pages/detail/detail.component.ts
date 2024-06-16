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
import { CartService } from '../../service/cart.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-detail',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    FooterComponent,
    CommonModule,
    NavComponent,
    CurrencyPipe,
    NgClass,
    SafeUrlPipe,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  private videogamesService = inject(VideogamesService);
  private cartService = inject(CartService);

  videogame = signal<any>({});
  videogames = signal<any>({});
  @Input() id: string = '';
  @Input() filterBy: string = '';
  @Input() filterValue: string = '';
  @Input() name: string = '';

  ngOnInit() {
    console.warn('[ngOnInit] Se ha inicializado el componente Detail');
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
