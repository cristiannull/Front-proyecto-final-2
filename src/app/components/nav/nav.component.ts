import { Component, inject,signal,Input } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { AuthService } from '../../service/auth.service';
import { CommonModule } from '@angular/common';
import { VideogamesService } from '../../service/videogames.service';
import { NgClass,} from '@angular/common';
import { CategoriesService } from '../../service/categories.service';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, CommonModule,NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  private bodyElement!: HTMLElement;
  private userService = inject(UserService);
  private authService = inject(AuthService);
  private router = inject(Router);
  private videogamesService = inject(VideogamesService);
  private categoriesService = inject(CategoriesService);
  
  constructor() {}
  @Input() id: string = '';
  @Input() name: string = '';

  ngAfterViewInit() {
    this.bodyElement = document.querySelector('body') as HTMLElement;
  }
  gamemodes= signal<any>([]);
  videogames = signal<any>([]);
  notAvailable = true;
  genders= signal<any>([]);
  themes= signal<any>([]);
  pegis= signal<any>([]);
  gendervideogames= signal<any>([]);
  featuredvideogames = signal<any>([]);

  ngOnInit() {
    console.warn('[ngOnInit] Se ha inicializado el componente Detail');
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

  isLogged() {
    return this.userService.isLogged();
  }

  logout() {
    this.authService.removeToken();
    this.router.navigate(['/login']);
  }

  
}
