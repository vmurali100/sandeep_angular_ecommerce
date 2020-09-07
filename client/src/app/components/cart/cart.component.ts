import { CommonService } from "./../../shared/common.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  shoppingItems: any = [];
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.shoppingItems = this.commonService.getshoppingItems();
    console.log(this.shoppingItems);
    this.commonService.getshoppingItemsFromServe().subscribe((products) => {
      this.shoppingItems = products;
      this.shoppingItems.map((product) => {
        this.commonService.addItemToCartLocally(product);
      });
    });
  }
}
