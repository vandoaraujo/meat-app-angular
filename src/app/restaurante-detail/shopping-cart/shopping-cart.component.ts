import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from './shopping-cart.service'
import { CartItem } from "app/restaurante-detail/shopping-cart/cart-item.model";
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations'


@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  animations: [
    trigger('row', [
      state('ready', style({opacity: 1})),
      transition('void => ready', animate('300ms 0s ease-in', keyframes([
        style({opacity:0, transform: 'translateX(-30px)'}),
        style({opacity:0.8, transform: 'translateX(10px)'}),
        style({opacity:1, transform: 'translateX(0px)'})

      ]))),
      transition('ready => void', animate('300ms 0s ease-out', keyframes([
        style({opacity:1, transform: 'translateX(0px)', offSet:0}),
        style({opacity:0.8, transform: 'translateX(-10px)', offSet:0.2}),
        style({opacity:0, transform: 'translateX(30px)', offSet:1})
      ])))
    ])
  ]
})
export class ShoppingCartComponent implements OnInit {

  rowState = 'ready'

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
