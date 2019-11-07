import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {MEAT_API} from '../app.api';

import { Observable } from 'rxjs/Observable'

@Injectable()
export class LoginService {

  constructor (private http:HttpClient){}

  login(email: string, password : string){
    return this.http.post(`${MEAT_API}/login`,
          {email: email, password: password})
  }
  
}
