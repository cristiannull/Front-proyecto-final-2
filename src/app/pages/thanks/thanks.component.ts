import { Component,inject } from '@angular/core';
import { NavComponent } from '../../components/nav/nav.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../service/cart.service';
@Component({
  selector: 'app-thanks',
  standalone: true,
  imports: [ NavComponent,CheckoutComponent],
  templateUrl: './thanks.component.html',
  styleUrl: './thanks.component.css'
})
export class ThanksComponent {
   private router = inject(Router);
   private cartService=inject(CartService)
   emptyCart(){
    this.cartService.emptyCart()
    this.router.navigate(["/home"])
  }
}
 

