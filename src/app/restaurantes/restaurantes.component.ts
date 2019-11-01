import { Component, OnInit } from '@angular/core';
import { Restaurante } from "app/restaurantes/restaurante/restaurante.model";
import { RestaurantesService } from "app/restaurantes/restaurantes.service";
import {trigger, state, style, transition, animate} from '@angular/animations'
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'

import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/from'
import {Observable} from 'rxjs/Observable'

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  animations: [
  trigger('toggleSearch', [
    state('hidden', style({
      opacity: 0,
      "max-height": "0px"
    })),
    state('visible', style({
      opacity: 1,
      "max-height": "70px",
      "margin-top": "20px"
    })),
    transition('* => *', animate('250ms 0s ease-in-out'))
  ])
]
})
export class RestaurantesComponent implements OnInit {

  searchBarState = 'hidden'
  restaurantes: Restaurante []

  searchForm: FormGroup
  searchControl: FormControl

  constructor(private restaurantsService: RestaurantesService,
              private fb: FormBuilder) { }

  ngOnInit() {

    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
        .debounceTime(500)
        .distinctUntilChanged()
        .switchMap( searchTerm => this.restaurantsService
            .restaurantes(searchTerm)
            .catch(error => Observable.from([])))
            .subscribe(restaurants => this.restaurantes = restaurants)

    this.restaurantsService.restaurantes()
      .subscribe(restaurants => this.restaurantes = restaurants)
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }

}
