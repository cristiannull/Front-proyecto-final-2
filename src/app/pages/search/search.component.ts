import { Component, Input, inject, signal, SimpleChanges } from '@angular/core';
import { CategoriesService } from '../../service/categories.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavComponent } from '../../components/nav/nav.component';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FooterComponent, NavComponent, CardsComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  private categoriesService = inject(CategoriesService);

  videogames = signal<any>([]);

  @Input() name: string = '';
  ngOnInit() {
    console.warn(
      '[ngOnInit] El componente lista de videojuegos ha sido inicializado'
    );
    this.categoriesService.getVideogameSearch(this.name).subscribe({
      next: (videogames: any) => {
        this.videogames.set(videogames);
      },
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['name'] && this.name.toLowerCase()) {
      const searchName = this.name;
      this.categoriesService.getVideogameSearch(searchName).subscribe({
        next: (videogames: any) => {
          this.videogames.set(videogames);
        },
      });
    }
  }
}
