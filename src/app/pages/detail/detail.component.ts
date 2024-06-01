import { Component, inject, Input, signal } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { VideogamesService } from '../../service/videogames.service';
import { Videogame } from '../../models/videogame.models';
import { NgClass, CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NavComponent, CurrencyPipe, NgClass],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  private vidogamesService = inject(VideogamesService);

  notAvailable = true;
  videogame = signal<any>({});
  @Input() id: string = '';

  ngOnInit() {
    console.warn('[ngOnInit] Se ha inicializado el componente Detail');
    this.vidogamesService.getOneVideogameById(this.id).subscribe({
      next: (videogame) => {
        console.log(videogame);
        this.videogame.set(videogame);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
