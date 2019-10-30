import { Component, OnInit, Input } from '@angular/core';
import { Restaurante } from "app/restaurantes/restaurante/restaurante.model";
import {trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html',
  animations: [
    trigger('restaurantAppeared', [
      state('ready', style({opacity : 1})),
      transition('void => ready',[
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class RestauranteComponent implements OnInit {

  restauranteState = "ready"

  @Input() restaurante: Restaurante

  constructor() { }

  ngOnInit() {
  }

}
