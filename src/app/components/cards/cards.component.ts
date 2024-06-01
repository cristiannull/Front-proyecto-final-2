import { Component, signal, inject, Input } from '@angular/core';
import { VideogamesService } from '../../service/videogames.service';
import { NgClass, CommonModule, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

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
  @Input() image: string = '';

  ngOnInit() {
    console.warn(
      '[ngOnInit] El componente lista de videojuegos ha sido inicializado'
    );
    this.videogamesService.getVideogames().subscribe({
      next: (videogames) => {
        this.videogames.set(videogames);
      },
    });
  }
}
