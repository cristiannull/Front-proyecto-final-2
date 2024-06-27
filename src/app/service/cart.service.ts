import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  videogames = signal(new Map());
  private readonly CART_STORAGE_KEY = 'cart';
  private http = inject(HttpClient);

  total = computed(() => {
    let mapActual = this.videogames();
    let totalParcial = 0;

    for (let videogame of mapActual.values()) {
      totalParcial += videogame.price * videogame.quantity;
    }
    return totalParcial;
  });

  constructor() {
    this.loadCartFromLocalStorage();
  }

  addToCart(videogame: any) {
    this.videogames.update((mapActual: any) => {
      const videogameInCart = mapActual.get(videogame._id);
      if (videogameInCart !== undefined) {
        mapActual.set(videogame._id, {
          ...videogameInCart,
          quantity: videogameInCart.quantity + 1,
        });
      } else {
        mapActual.set(videogame._id, { ...videogame, quantity: 1 });
      }
      this.saveCartToLocalStorage(mapActual);
      return new Map(mapActual);
    });
  }

  incrementQuantity(videogameId: string) {
    this.videogames.update((mapActual) => {
      const productInCart = mapActual.get(videogameId);
      if (productInCart !== undefined) {
        mapActual.set(videogameId, {
          ...productInCart,
          quantity: productInCart.quantity + 1,
        });
        this.saveCartToLocalStorage(mapActual);
      }
      return new Map(mapActual);
    });
  }

  decrementQuantity(videogameId: string) {
    this.videogames.update((mapActual) => {
      const productInCart = mapActual.get(videogameId);
      if (productInCart.quantity === 1) {
        mapActual.delete(videogameId);
      } else {
        mapActual.set(videogameId, {
          ...productInCart,
          quantity: productInCart.quantity - 1,
        });
      }
      this.saveCartToLocalStorage(mapActual);
      return new Map(mapActual);
    });
  }

  deleteItem(videogameId: string) {
    this.videogames.update((mapActual) => {
      const videogameExist = mapActual.get(videogameId);
      if (videogameExist !== undefined) {
        mapActual.delete(videogameId);
      }
      this.saveCartToLocalStorage(mapActual);
      return new Map(mapActual);
    });
  }

  private saveCartToLocalStorage(cart: Map<string, any>) {
    const cartArray = Array.from(cart.entries());
    localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(cartArray));
  }

  private loadCartFromLocalStorage() {
    const cartData = localStorage.getItem(this.CART_STORAGE_KEY);
    if (cartData) {
      const cartArray = JSON.parse(cartData);
      const cartMap = new Map(cartArray);
      this.videogames.set(cartMap);
    }
  }
  createOrder(formData: any) {
    console.log("Create order");
    console.log(formData)
    console.log(this.videogames().values())



    const mapActual = Array.from(this.videogames().values())
    const videogamesArray = mapActual.map(videogame => {
      return { videogameId:videogame._id, quantity:videogame.quantity }
    })

    console.log(videogamesArray)


    return this.http.post(
      "http://localhost:3000/api/shoop",
      {
        videogames: videogamesArray,
        total: this.total(),
        dato1: formData.dato1,
        dato2: formData.dato2,
        dato3: formData.dato3,
        paymentMethod: formData.paymentMethod
      },
      {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${localStorage.getItem("user_token")}`,  // Reemplaza 'tu_token_aqui' con el token real
          'Content-Type': 'application/json'
        })
      })
  }
  emptyCart(){
    this.videogames.set(new Map())
  }
}
