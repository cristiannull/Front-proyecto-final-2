import {
  Component,
  inject,
  signal,
  computed,
  WritableSignal,
} from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { NavComponent } from '../../components/nav/nav.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { VideogamesService } from '../../service/videogames.service';
import { FooterComponent } from '../../components/footer/footer.component';
import { SkeletonModule } from 'primeng/skeleton';
import { CommonModule } from '@angular/common';
import { Videogame } from '../../models/videogame.models';
import { CardStore } from '../../store/cards.store';

@Component({
  selector: 'app-videogamelist',
  standalone: true,
  imports: [
    SkeletonModule,
    CardsComponent,
    NavComponent,
    RouterLinkActive,
    RouterLink,
    FooterComponent,
    CommonModule,
  ],
  templateUrl: './videogamelist.component.html',
  styleUrl: './videogamelist.component.css',
})
export class VideogamelistComponent {
  private videogamesService = inject(VideogamesService);

  videogames = signal<any>([]);
  isLoading: boolean = false;
  store = inject(CardStore);
  page: WritableSignal<number> = signal(1);

  currentPage(): number {
    return this.page();
  }

  goToPage(page: number) {
    if (
      page > 0 &&
      page <= this.store.totalPages() &&
      page !== this.currentPage()
    ) {
      this.page.set(page);
      this.store.loadPages(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  pages(): number[] {
    const totalPages = this.store.totalPages();
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  ngOnInit() {
    this.store.loadPages(this.currentPage());
  }
}
