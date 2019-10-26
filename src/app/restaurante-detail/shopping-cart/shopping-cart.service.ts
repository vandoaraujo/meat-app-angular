import { CartItem } from "app/restaurante-detail/shopping-cart/cart-item.model";
import { MenuItem } from "app/restaurante-detail/menu-item/menu-item.model";

export class ShoppingCartService {
  items: CartItem[] = []

  clear(){
    this.items  = []
  }

  addItem(item:MenuItem){
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
    if(foundItem){
      this.increaseQty(foundItem)
    }else{
      this.items.push(new CartItem(item))
    }
  }

  increaseQty(item: CartItem){
    item.quantity = item.quantity + 1;
  }

  decreaseQty(item: CartItem){
    item.quantity = item.quantity - 1;
    if(item.quantity === 0){
      this.removeItem(item)
    }
  }

  total(): number{
    return this.items
      .map(item => item.value())
      .reduce((prev, value)=> prev+value, 0);
  }

  removeItem(item:CartItem){
    this.items.splice(this.items.indexOf(item), 1)
  }

}
