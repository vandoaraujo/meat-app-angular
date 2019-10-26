import { Component, OnInit } from '@angular/core';
import { RadioOption } from "../shared/radio/radio-option.model";
import { OrderService } from "app/order/order.service";
import { CartItem } from "app/restaurante-detail/shopping-cart/cart-item.model";
import { Order, OrderItem } from "app/order/order.model";


@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão Refeição', value: 'REF'}
  ]

  value : any

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItem[]{
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItem){
    return this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    return this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    return this.orderService.remove(item)
  }

  //metodo subscribe faz a inscrita naquele observer, nesse momento o observable faz a subscricao
  checkOrder(order: Order){
    order.orderItems = this.cartItems()
      .map((item:CartItem)=>new OrderItem(item.quantity, item.menuItem.id))
      this.orderService.checkOrder(order)
        .subscribe( (orderId: string) => {
            console.log(`Compra concluida: ${orderId}`)
            this.orderService.clear()
        })
    console.log(order)
  }


}
