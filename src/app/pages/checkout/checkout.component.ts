import { Component, inject } from '@angular/core';
import { CardCartComponent } from '../../components/card-cart/card-cart.component';
import { CartService } from '../../service/cart.service';
import { NavComponent } from '../../components/nav/nav.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, CurrencyPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CardCartComponent, NavComponent, ReactiveFormsModule, CommonModule, CurrencyPipe, NgClass],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  private cartService = inject(CartService)
  private router = inject(Router)
  cart = this.cartService.videogames;

  videogames = this.cartService. videogames
  paymentDetails = new FormGroup({
    dato1: new FormControl(""),
    dato2: new FormControl(""),
    dato3: new FormControl(""),
    paymentMethod: new FormControl("")
  })

  onSubmit() {
    if(this.videogames().size >= 1 && this.paymentDetails.valid) {
      this.cartService.createOrder(this.paymentDetails.value)
      .subscribe({
        next: () => this.router.navigate(["/thanks"])
      })
    }
  }
}
