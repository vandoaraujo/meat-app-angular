import {Injectable} from '@angular/core'
import { ShoppingCartService } from "app/restaurante-detail/shopping-cart/shopping-cart.service";
import { CartItem } from "app/restaurante-detail/shopping-cart/cart-item.model";

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService){

  }

  cartItems() : CartItem[]{
    return this.cartService.items
  }

  increaseQty(item: CartItem){
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.cartService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.cartService.removeItem(item)
  }


}
