import { NgModule } from "@angular/core";
import { CartComponent } from "./cart.component";
import { CartRoutingModule } from "./cart-router.module";

@NgModule({
  declarations: [CartComponent],
  imports: [CartRoutingModule],
})
export class CartModule {}
