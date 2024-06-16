import { Component, signal, Input, inject } from '@angular/core';

import { RouterLink } from '@angular/router';
import { VideogamesService } from '../../service/videogames.service';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  private videogamesService = inject(VideogamesService);

  videogames = signal<any>([]);
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() price: string = '';
  @Input() cover: string = '';

  ngOnInit() {
    console.warn(
      '[ngOnInit] El componente lista de videojuegos ha sido inicializado'
    );
    this.videogamesService.getVideogames().subscribe({
      next: (videogames: any) => {
        this.videogames.set(videogames.data);
      },
    });
  }
}
