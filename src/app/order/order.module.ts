import { SharedModule } from "app/shared/shared.module";
import { OrderComponent } from "app/order/order.component";
import { OrderItemsComponent } from "app/order/order-items/order-items.component";
import { DeliveryCostsComponent } from "app/order/delivery-costs/delivery-costs.component";
import { NgModule } from "@angular/core/src/metadata";
import { AboutComponent } from "app/about/about.component";
import { Routes } from "@angular/router/src";

const ROUTES : Routes = [
  {path: '', component: AboutComponent}
]

@NgModule({
  declarations:[OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
  imports: [SharedModule]
})
export class OrderModule{}
