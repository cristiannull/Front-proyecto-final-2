import { Component} from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
videogames=[
  {
    title:"Gears of war",
    price:"20",
    image:"https://th.bing.com/th/id/OIP.hhE4ub1fRWYfhZt2s6w80gHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7"
  },

  {
    title:"Call of Duty II",
    price:"35",
    image:"https://th.bing.com/th/id/OIP.ryX85S4iHT64R2eRTPH4iwAAAA?w=172&h=180&c=7&r=0&o=5&pid=1.7"
  },

  {
    title:"God of war",
    price:"100",
    image:"https://th.bing.com/th/id/OIP.CWK-TTjEfrtFtYmul_H8jgHaEo?w=248&h=180&c=7&r=0&o=5&pid=1.7"
  },

  {
    title:"Doom",
    price:"45",
    image:"https://th.bing.com/th/id/OIP.Z2puH4WvbBz_i_w05Mj4UAHaEK?w=292&h=180&c=7&r=0&o=5&pid=1.7"
  },
]


}
