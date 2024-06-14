import { Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 videogames = signal(new Map())

 addToCart(videogame: any) {
  this.videogames.update((mapActual: any) => {
    const videogameInCart = mapActual.get(videogame._id)
    if (videogameInCart !== undefined) {
      // El producto ya existe
      mapActual.set(videogame._id, { ...videogameInCart, quantity: videogameInCart.quantity + 1 })
    } else {
      // El producto no existe
      mapActual.set(videogame._id, { ...videogame, quantity: 1 })
    }
    console.log(mapActual)
    return new Map(mapActual)
  })
}

 incrementQuantity(videogameId: string) {
  this.videogames.update(mapActual => {
    const productInCart = mapActual .get(videogameId)
    if (productInCart !== undefined)
    mapActual.set(videogameId, { ...productInCart , quantity:  productInCart.quantity + 1})
    return new Map(mapActual)
  })
 }

 decrementQuantity(videogameId: string) {
  this.videogames.update(mapActual => {
    const productInCart = mapActual .get(videogameId)
    if (productInCart .quantity=== 1) {
      mapActual.delete(videogameId)
   } else {
    mapActual.set(videogameId, { ...productInCart , quantity:  productInCart.quantity - 1})
   }
    return new Map(mapActual)
  })
 }

  constructor() { }
}
