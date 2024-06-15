import { Component, signal, Input } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  videogames = signal<any>([]);
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() price: string = '';
  @Input() image: string = '';
}
