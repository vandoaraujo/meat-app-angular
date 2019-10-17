

import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { RestaurantesComponent } from "./restaurantes/restaurantes.component";

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'restaurants', component: RestaurantesComponent},
  {path: 'about', component: AboutComponent}
]
