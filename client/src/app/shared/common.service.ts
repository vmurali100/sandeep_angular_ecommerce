import { User } from "./User";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  loginInfo = new Subject();
  addToCart = new Subject();
  updateCart = new Subject();
  loggedInUser;
  shoppingItems = [];
  constructor(private _http: HttpClient) {}

  registerUser(user: User) {
    return this._http.post("http://localhost:3000/users", user);
  }
  getAllUsers() {
    return this._http.get("http://localhost:3000/users");
  }
  getAllProduts() {
    return this._http.get("http://localhost:3000/products");
  }
  sendLoginInfo(userDetails) {
    this.loggedInUser = userDetails;
    localStorage.setItem("loggedInUser", JSON.stringify(userDetails));
    this.loginInfo.next(userDetails);
  }
  addItemToCart(product) {
    product.purchedUser = this.loggedInUser.email;
    this.addItemToCartLocally(product);
    return this._http.post("http://localhost:3000/shoppingItems", product);
  }

  getshoppingItemsFromServe() {
    return this._http.get("http://localhost:3000/shoppingItems");
  }
  logout(user) {
    this.updateShoppingCart([]);
    this.loginInfo.next(user);
  }
  getshoppingItems() {
    return this.shoppingItems;
  }
  addItemToCartLocally(product) {
    // this.shoppingItems.push(product);
    this.addToCart.next(product);
  }
  getLoggedInUser() {
    this.loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    return this.loggedInUser.email;
  }
  updateShoppingCart(data) {
    this.shoppingItems = data;
    this.updateCart.next(data);
  }
  checkLoggedInUser() {
    let loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      return true;
    } else {
      return false;
    }
  }

  setProfile(profile) {
    this._http
      .post("http://localhost:3000/userProfile", profile)
      .subscribe((res) => {
        console.log("Profile Added");
      });
  }

  getProfile() {
    return this._http.get("http://localhost:3000/userProfile");
  }
}
