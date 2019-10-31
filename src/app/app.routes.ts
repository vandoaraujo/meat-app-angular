

import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { RestauranteDetailComponent } from "app/restaurante-detail/restaurante-detail.component";
import { MenuComponent } from "app/restaurante-detail/menu/menu.component";
import { ReviewsComponent } from "app/restaurante-detail/reviews/reviews.component";
import { OrderComponent } from "app/order/order.component";
import { OrderSummaryComponent } from "app/order-summary/order-summary.component";
import { NotFoundComponent } from "app/not-found/not-found.component";

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantesComponent},
  {path: 'restaurantes/:id', component: RestauranteDetailComponent,
    children: [
      {path: '', redirectTo: 'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]},
  {path: 'order', loadChildren: './order/order.module#OrderModule'},
  {path: 'order-summary', component: OrderSummaryComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  //WILDCARD ROOT
  {path: '**', component: NotFoundComponent}

]
