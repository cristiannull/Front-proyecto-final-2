import { Component, inject, Input, signal } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { VideogamesService } from '../../service/videogames.service';
import { CurrencyPipe } from '@angular/common';
import { NgClass, CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../../safe-url.pipe';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-detail',
  standalone: true,
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

  videogame = signal<any>({});
  @Input() id: string = '';

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
}
