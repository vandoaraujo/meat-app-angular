

import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";
import { RestauranteDetailComponent } from "app/restaurante-detail/restaurante-detail.component";

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantesComponent},
  {path: 'restaurantes/:id', component: RestauranteDetailComponent},
  {path: 'about', component: AboutComponent}
]
