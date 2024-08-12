import { Component } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [
    CommonModule,
    NgClass
  ],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  items = [
    { image: 'http://imgfz.com/i/ADjcXQ0.png', title: '¡Pruebalo el 15 de Agosto! Zenless Zone Zero', text: 'Nueva actualizacion - Zenless Zone Zero Undercover' },
    { image: 'https://wallpapercave.com/wp/wp14158640.jpg', title: 'Elden Ring', text: '¡Prueba ahora el nuevo DLC de Elden Ring - Shadows of the Erdtree!' },
    { image: 'https://pbs.twimg.com/media/GUWcnLoXUAAWj0d?format=jpg&name=large', title: '¡Pruebalo el 15 de Agosto! Wuthering Waves', text: 'Nueva actualizacion - In the Turquoise Moonglow' }
  ];
  currentIndex = 0;

  get transform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.items.length - 1;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex < this.items.length - 1) ? this.currentIndex + 1 : 0;
  }
}
