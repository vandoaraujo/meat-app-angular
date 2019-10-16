import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RestaurantesComponent } from './restaurantes/restaurantes.component'
=======
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
>>>>>>> ef9445c7d565b0ecfe959f95f606a9113f479187


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    RestaurantesComponent
=======
    HeaderComponent,
    HomeComponent,
    AboutComponent
>>>>>>> ef9445c7d565b0ecfe959f95f606a9113f479187
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
