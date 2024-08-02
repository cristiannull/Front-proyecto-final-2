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
  images = [
    'https://i.pinimg.com/originals/10/dd/02/10dd02f9476f82d05f17d88a31e3c80b.jpg',
    'https://staticdelivery.nexusmods.com/mods/952/images/headers/7630_1673494337.jpg',
    'https://via.placeholder.com/600x400?text=Imagen+3'
  ];
  currentIndex = 0;

  get transform(): string {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
  }
}
