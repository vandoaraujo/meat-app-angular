import {Injectable} from '@angular/core'
import {Http} from  '@angular/http'
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Restaurante } from "app/restaurantes/restaurante/restaurante.model";

import {MEAT_API} from '../app.api'
import {ErrorHandler} from '../app.error-handler'

@Injectable()
export class RestaurantesService {

  constructor(private http: Http){}

  restaurantes(): Observable<Restaurante[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  //*um servico retorna um observable, por isso é necessario um map transformando-o em json.
  restaurantesById(id: string): Observable<Restaurante>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }
}
