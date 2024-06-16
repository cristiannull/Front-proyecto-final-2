import { Component, Input, SimpleChanges, inject, signal } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { NavComponent } from '../../components/nav/nav.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../../components/footer/footer.component';
import { CategoriesService } from '../../service/categories.service';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    FooterComponent,
    RouterLink,
    RouterLinkActive,
    NavComponent,
    CardsComponent,
    SkeletonModule,
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
  isLoading: boolean = true;
  data: any;

  ngOnInit() {
    console.warn(
      '[ngOnInit] El componente lista de videojuegos ha sido inicializado'
    );
    this.categoriesService.getProducts().subscribe({
      next: (response) => {
        this.data = response;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading data', error);
        this.isLoading = false;
      },
    });
    if (this.filterBy !== '' && this.filterValue !== '') {
      this.categoriesService
        .getProducts(this.filterBy, this.filterValue)
        .subscribe({
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
