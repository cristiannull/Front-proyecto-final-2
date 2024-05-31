import { Component, inject,Input, signal} from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { VideogamesService } from '../../service/videogames.service';
import { Videogame } from '../../models/videogame.models';
import { STRING_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  
 @Input()id?:string;
  private videogamesService = inject (VideogamesService);
  videogame = signal<null | Videogame>(null);

  ngOnInit() {
    if (this.id !== undefined) {
      this.videogame.set(this.videogamesService.getOneVideogameById(String(this.id)));
    }
  }
}
