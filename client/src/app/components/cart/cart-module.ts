import { NgModule } from "@angular/core";
import { CartComponent } from "./cart.component";
import { CartRoutingModule } from "./cart-router.module";
import { CommonModule } from "@angular/common";
import { DemoMaterialModule } from "src/app/material-module";

@NgModule({
  declarations: [CartComponent],
  imports: [CartRoutingModule, CommonModule, DemoMaterialModule],
})
export class CartModule {}
