import { CommonService } from "./../../shared/common.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  products: any = [];
  allProducts: any = [];
  currentUserProducts = [];
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.getAllProduts().subscribe((res) => {
      this.products = res;
    });
    this.checkShoppingItems();
  }

  buyItem(product) {
    this.commonService.addItemToCart(product).subscribe((res) => {
      console.log("product Added to Cart");
    });
    console.log(product);
  }

  checkShoppingItems() {
    this.commonService.getshoppingItemsFromServe().subscribe((products) => {
      console.log(products);
      this.allProducts = products;
      let loggedInUser = this.commonService.getLoggedInUser();
      this.currentUserProducts = this.allProducts.filter(
        (prod) => prod.purchedUser == loggedInUser
      );
      this.commonService.updateShoppingCart(this.currentUserProducts);
    });
  }
}
