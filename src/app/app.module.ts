import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common'

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
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component'
import { ApplicationErrorHandler } from "app/app.error-handler";

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
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy : PreloadAllModules})
  ],
  //providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, {provide: LOCALE_ID, useValue: 'pt-BR'},
              {provide: ErrorHandler, useClass: ApplicationErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
