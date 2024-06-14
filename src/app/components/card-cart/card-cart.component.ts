import { Component, Input, inject, signal, SimpleChanges } from '@angular/core';
import { VideogamesService } from '../../service/videogames.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../service/cart.service';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-card-cart',
  standalone: true,
  imports: [ReactiveFormsModule, CurrencyPipe],
  templateUrl: './card-cart.component.html',
  styleUrl: './card-cart.component.css',
})
export class CardCartComponent {
  private videogameService = inject(VideogamesService);
private cartservice = inject(CartService)
  videogames = signal<any>([]);
  @Input() videogame: any;

  productQuantity = new FormControl(0);

constructor() {}

ngOnChanges( changes: SimpleChanges ) {
  if (changes['videogame'] && this.videogame) {
    this.productQuantity.setValue(this.videogame.quantity)
  }  
}

increment(videogameId: string) {
  this.cartservice.incrementQuantity(videogameId)
}

decrement(videogameId: string) {
  this.cartservice.decrementQuantity(videogameId)
}

}