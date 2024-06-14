import { Injectable, signal, computed} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 videogames = signal(new Map())

total = computed(() => {
  let mapActual = this.videogames()
  let totalParcial = 0;

  for(let videogame of mapActual.values()) {
    totalParcial += videogame.price * videogame.quantity
  }
  return totalParcial
})

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

deleteItem(videogameId: string) {
  this.videogames.update(mapActual => {
    const videogameExist = mapActual.get(videogameId)
    if(videogameExist !== undefined) {
      mapActual.delete(videogameId)
    }
    return new Map(mapActual)
  })

}
  constructor() { }
}
