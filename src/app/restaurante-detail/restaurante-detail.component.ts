import { Component, OnInit } from '@angular/core';
import { Restaurante } from "app/restaurantes/restaurante/restaurante.model";
import { RestaurantesService } from "app/restaurantes/restaurantes.service";
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'mt-restaurante-detail',
  templateUrl: './restaurante-detail.component.html'
})
export class RestauranteDetailComponent implements OnInit {

  restaurante : Restaurante

  constructor(private restaurantesService : RestaurantesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantesService.restaurantesById(this.route.snapshot.params['id'])
      .subscribe( restaurant => this.restaurante = restaurant )
  }

}
