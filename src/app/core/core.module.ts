import { ShoppingCartService } from "app/restaurante-detail/shopping-cart/shopping-cart.service";
import { NgModule } from "@angular/core/src/metadata";
import { RestaurantesService } from "app/restaurantes/restaurantes.service";
import { OrderService } from "app/order/order.service";

@NgModule({
  providers:[ShoppingCartService, RestaurantesService, OrderService]
})
export class CoreModule {}
