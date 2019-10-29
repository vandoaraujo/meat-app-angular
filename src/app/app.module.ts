import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component'

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestauranteComponent } from "app/restaurantes/restaurante/restaurante.component";
import { RestaurantesService } from "app/restaurantes/restaurantes.service";
import { RestauranteDetailComponent } from './restaurante-detail/restaurante-detail.component';
import { MenuComponent } from 'app/restaurante-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurante-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurante-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurante-detail/reviews/reviews.component';
import { ShoppingCartService } from "app/restaurante-detail/shopping-cart/shopping-cart.service";
import { OrderComponent } from './order/order.component';
import { OrderItemsComponent } from 'app/order/order-items/order-items.component';
import { OrderService } from "app/order/order.service";
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SharedModule } from "app/shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    RestaurantesComponent,
    HeaderComponent,
    HomeComponent,
    RestauranteComponent,
    RestauranteDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantesService, ShoppingCartService, OrderService, FormBuilder, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
