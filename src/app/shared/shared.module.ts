import {NgModule, ModuleWithProviders} from '@angular/core'

import {InputComponent} from './input/input.component'
import { RadioComponent } from "app/shared/radio/radio.component";
import { RatingComponent } from "app/shared/rating/rating.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShoppingCartService } from "app/restaurante-detail/shopping-cart/shopping-cart.service";
import { RestaurantesService } from "app/restaurantes/restaurantes.service";
import { OrderService } from "app/order/order.service";


@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent, RatingComponent,
            CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers:[ShoppingCartService, RestaurantesService, OrderService]
    }
  }

}
