import { SharedModule } from "app/shared/shared.module";
import { OrderComponent } from "app/order/order.component";
import { OrderItemsComponent } from "app/order/order-items/order-items.component";
import { DeliveryCostsComponent } from "app/order/delivery-costs/delivery-costs.component";
import { NgModule } from "@angular/core";
import { AboutComponent } from "app/about/about.component";
import { Routes, RouterModule } from "@angular/router";
import {LeaveOrderGuard} from './leave-order.guard'

const ROUTES : Routes = [
  {path: '', component: OrderComponent, canDeactivate: [LeaveOrderGuard]}
]

@NgModule({
  declarations:[OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class OrderModule{}
