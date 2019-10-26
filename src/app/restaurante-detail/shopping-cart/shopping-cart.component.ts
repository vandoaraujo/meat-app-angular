import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service'
import { CartItem } from "app/restaurante-detail/shopping-cart/cart-item.model";

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): CartItem[]{
    return this.shoppingCartService.items;
  }

  clear() {
    this.shoppingCartService.clear()
  }

  total(): number {
    return this.shoppingCartService.total()
  }

  removeItem(item: any){
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: any){
    this.shoppingCartService.addItem(item)
  }

}
