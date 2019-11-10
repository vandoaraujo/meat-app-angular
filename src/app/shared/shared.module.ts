import {NgModule, ModuleWithProviders} from '@angular/core'

import {InputComponent} from './input/input.component'
import { RadioComponent } from "app/shared/radio/radio.component";
import { RatingComponent } from "app/shared/rating/rating.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {HTTP_INTERCEPTORS} from '@angular/common/http'
import { ShoppingCartService } from "app/restaurante-detail/shopping-cart/shopping-cart.service";
import { RestaurantesService } from "app/restaurantes/restaurantes.service";
import { OrderService } from "app/order/order.service";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { NotificationService } from "app/shared/messages/notification.service";
import {LoginService} from 'app/login/login.service'
import {LoggedInGuard} from 'app/login/loggedIn.guard'
import {LeaveOrderGuard} from '../order/leave-order.guard'
import { AuthInterceptor } from "app/auth.interceptor";

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent,
            CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers:[ShoppingCartService,
                 RestaurantesService,
                 OrderService,
                 NotificationService,
                 LoginService,
                 LoggedInGuard,
                 LeaveOrderGuard,
                 //multi = true --> todos os interceptors serao registrador dessa maneira
                 // e associados ao mesmo token, esse token sera multivalorado
                 // Esse token tem mais de um valor e esse intercpetor faz parte desse token
                 {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}
                ]
    }
  }

}
