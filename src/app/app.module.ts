import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import {FormsModule, ReactiveFormsModule, FormBuilder} from '@angular/forms';

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component'

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestauranteComponent } from "app/restaurantes/restaurante/restaurante.component";
import { RestauranteDetailComponent } from './restaurante-detail/restaurante-detail.component';
import { MenuComponent } from 'app/restaurante-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurante-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurante-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurante-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SharedModule } from "app/shared/shared.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component'

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
    OrderSummaryComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy : PreloadAllModules})
  ],
  providers: [FormBuilder, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
