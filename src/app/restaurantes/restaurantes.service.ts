import {Injectable} from '@angular/core'
import {HttpClient} from  '@angular/common/http'
import { Observable } from "rxjs";

import { Restaurante } from "app/restaurantes/restaurante/restaurante.model";

import {MEAT_API} from '../app.api'
import { MenuItem } from "app/restaurante-detail/menu-item/menu-item.model";
import { HttpParams } from "@angular/common/http";

@Injectable()
export class RestaurantesService {

  constructor(private http: HttpClient){}

  restaurantes(search?: string): Observable<Restaurante[]> {
    let params: HttpParams = undefined
    if(search){
      params = new HttpParams().append('q', search)
    }
    console.log('MEAT API ' + `${MEAT_API}`)
    return this.http.get<Restaurante[]>(`${MEAT_API}/rests`, {params: params })
  }

  //*um servico retorna um observable, por isso é necessario um map transformando-o em json.
  restaurantesById(id: string): Observable<Restaurante>{
    return this.http.get<Restaurante>(`${MEAT_API}/rests/${id}`)
  }

  reviewsOfRestaurant(id: String): Observable<any>{
    return this.http.get(`${MEAT_API}/rests/${id}/reviews`)
  }

  menuOfRestaurant(id: String): Observable<MenuItem>{
    return this.http.get<MenuItem>(`${MEAT_API}/rests/${id}/menu`)
  }
}
