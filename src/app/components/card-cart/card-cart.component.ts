import { Component, Input, inject, signal } from '@angular/core';
import { VideogamesService } from '../../service/videogames.service';
@Component({
  selector: 'app-card-cart',
  standalone: true,
  imports: [],
  templateUrl: './card-cart.component.html',
  styleUrl: './card-cart.component.css',
})
export class CardCartComponent {
  private videogameService = inject(VideogamesService);

  videogames = signal<any>([]);
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() price: string = '';
  @Input() image: string = '';

  ngOnInit() {
    console.warn(
      '[ngOnInit] El componente lista de videojuegos ha sido inicializado'
    );
    this.videogameService.getVideogames().subscribe({
      next: (videogames) => {
        this.videogames.set(videogames);
      },
    });
  }
}
