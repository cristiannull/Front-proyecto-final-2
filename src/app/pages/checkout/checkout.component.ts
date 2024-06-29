import { Component, inject, signal } from '@angular/core';
import { CardCartComponent } from '../../components/card-cart/card-cart.component';
import { CartService } from '../../service/cart.service';
import { NavComponent } from '../../components/nav/nav.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule, CurrencyPipe, NgClass } from '@angular/common';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CardCartComponent,
    NavComponent,
    ReactiveFormsModule,
    CommonModule,
    CurrencyPipe,
    NgClass,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  private cartService = inject(CartService);
  private router = inject(Router);
  private userService = inject(UserService);
  cart = this.cartService.videogames;
  total = this.cartService.total;
  videogame = signal<any>({});
  videogames = this.cartService.videogames;
  paymentMethods = signal<any>({});
  paymentDetails = new FormGroup({
    CardNumber: new FormControl(''),
    paymentMethod: new FormControl(''),
  });

  ngOnInit() {
    this.cartService.getPaymenthMetod().subscribe({
      next: (paymentMethods) => {
        this.paymentMethods.set(paymentMethods);
      },
    });
  }

  onSubmit() {
    if (this.videogames().size >= 1 && this.paymentDetails.valid) {
      this.cartService.createOrder(this.paymentDetails.value).subscribe({
        next: () => {
          localStorage.removeItem('cart');
          this.cartService.videogames.set(new Map());
          this.router.navigate(['/thanks']);
        },
      });
    }
  }

  isLogged() {
    return this.userService.isLogged();
  }
}
