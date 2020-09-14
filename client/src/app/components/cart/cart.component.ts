import { CommonService } from "./../../shared/common.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  shoppingItems: any = [];
  allItems: any = [];
  loggedInUser;
  totalAmountPayble = 0;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    if (this.commonService.checkLoggedInUser()) {
      this.commonService.getshoppingItemsFromServe().subscribe((res) => {
        this.allItems = res;
        this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        this.shoppingItems = this.allItems.filter((item) => {
          this.totalAmountPayble = this.totalAmountPayble + item.itemRate;
          return this.loggedInUser.email == item.purchedUser;
        });

        this.commonService.updateShoppingCart(this.shoppingItems);
      });
    }
    this.shoppingItems = this.commonService.getshoppingItems();
  }

  deleteProduct(i) {
    this.shoppingItems.splice(i, 1);
    this.calPaybleAmount();
  }
  calPaybleAmount() {
    this.totalAmountPayble = 0;
    this.shoppingItems.forEach((item) => {
      this.totalAmountPayble = this.totalAmountPayble + item.itemRate;
    });
  }
}
