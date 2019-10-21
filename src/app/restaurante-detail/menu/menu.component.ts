import { Component, OnInit } from '@angular/core';
import { RestaurantesService } from "app/restaurantes/restaurantes.service";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";
import { MenuItem } from "app/restaurante-detail/menu-item/menu-item.model";

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem>

  constructor(private restaurantsService: RestaurantesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantsService.menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(item : MenuItem){
    console.log(item)
  }

}
