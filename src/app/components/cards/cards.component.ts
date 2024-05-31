import { Component, Input,} from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  @Input() title: string = '';
  @Input() price: string  = '';
  @Input() image: string = '';
  @Input() alt: string = '';
  @Input() category: string = '';
  @Input() developer: string = '';
  @Input() gender: string = '';
  @Input() pegi: string = '';
 
  
}
