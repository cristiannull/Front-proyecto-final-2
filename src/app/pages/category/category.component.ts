import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { NavComponent } from '../../components/nav/nav.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { CategoriesService } from '../../service/categories.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    FooterComponent,
    RouterLink,
    RouterLinkActive,
    NavComponent,
    CardsComponent,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  private categoriesService = inject(CategoriesService);

  videogames = signal<any>([]);

  @Input() filterBy: string = '';
  @Input() filterValue: string = '';
  @Input() name: string = '';
  ngOnInit() {
    console.warn(
      '[ngOnInit] El componente lista de videojuegos ha sido inicializado'
    );
    if (this.filterBy !== '' && this.filterValue !== '') {
      this.categoriesService
        .getProducts(this.filterBy, this.filterValue)
        .subscribe({
          next: (videogames: any) => {
            this.videogames.set(videogames.data);
          },
        });
    }
    if (this.name !== '') {
      this.categoriesService.getVideogameSearch(this.name).subscribe({
        next: (videogames: any) => {
          this.videogames.set(videogames.data);
        },
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterBy'] || changes['filterValue']) {
      this.categoriesService
        .getProducts(this.filterBy, this.filterValue)
        .subscribe({
          next: (videogames: any) => {
            this.videogames.set(videogames.data);
          },
        });
    }
  }
}
