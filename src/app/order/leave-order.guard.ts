import { CanDeactivate } from "@angular/router";
import { OrderComponent } from "./order.component";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export class LeaveOrderGuard implements CanDeactivate<OrderComponent> {

  canDeactivate(orderComponent: OrderComponent,
     activatedRoute: ActivatedRouteSnapshot,
     routerState: RouterStateSnapshot): boolean  {
       if(!orderComponent.isOrderCompleted()){
         return window.confirm('Deseja desistir da compra?')
       } else{
          return true
       }

  }
}
