import { Component, inject, signal, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { AuthService } from '../../service/auth.service';
import { CommonModule, CurrencyPipe, NgClass } from '@angular/common';
import { CategoriesService } from '../../service/categories.service';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../service/cart.service';
import { CardCartComponent } from '../card-cart/card-cart.component';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    CommonModule,
    NgClass,
    FormsModule,
    CardCartComponent,
    CurrencyPipe,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  private userService = inject(UserService);
  private authService = inject(AuthService);
  private categoriesService = inject(CategoriesService);
  private cartService = inject(CartService);

  constructor(public router: Router) {}
  @Input() id: string = '';
  @Input() name: string = '';

  gamemodes = signal<any>([]);
  videogames = signal<any>([]);
  notAvailable = true;
  genders = signal<any>([]);
  themes = signal<any>([]);
  pegis = signal<any>([]);
  gendervideogames = signal<any>([]);
  featuredvideogames = signal<any>([]);
  showCart = signal(false);
  cart = this.cartService.videogames;
  total = this.cartService.total;

  ngOnInit() {
    console.warn('[ngOnInit] Se ha inicializado el componente Nav');
    this.categoriesService.getGender().subscribe({
      next: (genders) => {
        this.genders.set(genders);
      },
    });
    this.categoriesService.getTheme().subscribe({
      next: (themes) => {
        this.themes.set(themes);
      },
    });
    this.categoriesService.getGameMode().subscribe({
      next: (gamemodes) => {
        this.gamemodes.set(gamemodes);
      },
    });
    this.categoriesService.getPegi().subscribe({
      next: (pegis) => {
        this.pegis.set(pegis);
      },
    });
  }

  goToProfile(): void {
    const userId = this.authService.getUserIdFromToken();
    console.log('user:', userId);
    if (userId) {
      this.router.navigate(['/profile', userId]);
    }
  }

  onSubmit() {
    if (this.name !== '') {
      const searchName = this.name.toLowerCase();
      this.categoriesService.getVideogameSearch(searchName).subscribe({
        next: (videogames: any) => {
          if (videogames && videogames.length > 0) {
            this.router.navigate([`/search/${this.name}`]);
          } else {
            this.router.navigate(['/not-found']);
          }
        },
        error: (error: any) => {
          console.error('Error fetching videogames:', error);
          this.router.navigate(['/not-found']);
        },
      });
    } else {
      this.router.navigate(['/videogamelist']);
    }
  }

  isLogged() {
    return this.userService.isLogged();
  }

  logout() {
    this.authService.removeToken();
    this.router.navigate(['/login']);
  }

  toggleCartVisibility() {
    this.showCart.update((prevState) => !prevState);
  }

  trackById(index: number, item: any): string {
    return item.key;
  }
}
