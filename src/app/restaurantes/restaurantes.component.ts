import { Component, OnInit } from '@angular/core';
import { Restaurante } from "app/restaurantes/restaurante/restaurante.model";
import { RestaurantesService } from "app/restaurantes/restaurantes.service";
import {trigger, state, style, transition, animate} from '@angular/animations'
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'

import {Observable, from} from 'rxjs'
import { switchMap, tap, debounceTime, distinctUntilChanged, catchError} from 'rxjs/operators'

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
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap( searchTerm => this.restaurantsService
          .restaurantes(searchTerm)
          .pipe( catchError(error => from([]))))
    ).subscribe(restaurants => this.restaurantes = restaurants)

    this.restaurantsService.restaurantes()
      .subscribe(restaurants => this.restaurantes = restaurants)
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }

}
