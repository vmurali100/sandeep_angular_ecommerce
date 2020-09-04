import { User } from "./../components/dialogue-content/User.interface";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  constructor(private _http: HttpClient) {}

  registerUser(user: User) {
    return this._http.post("http://localhost:3000/users", user);
  }
  getAllUsers() {
    return this._http.get("http://localhost:3000/users");
  }
}
