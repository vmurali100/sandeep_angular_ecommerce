import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { ProductListComponent } from "./components/product-list/product-list.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "register",
    loadChildren: () =>
      import("./components/register/register-module").then(
        (m) => m.RegisterModule
      ),
  },
  { path: "login", component: LoginComponent },
  { path: "product-list", component: ProductListComponent },
  {
    path: "cart",
    loadChildren: () =>
      import("./components/cart/cart-module").then((m) => m.CartModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
