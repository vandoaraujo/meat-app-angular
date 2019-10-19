import {Injectable} from '@angular/core'
import {Http} from  '@angular/http'
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'

import { Restaurante } from "app/restaurantes/restaurante/restaurante.model";

import {MEAT_API} from '../app.api'

@Injectable()
export class RestaurantesService {

  constructor(private http: Http){}

  restaurantes(): Observable<Restaurante[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json());
  }
}
