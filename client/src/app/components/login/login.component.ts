import { User } from "./../dialogue-content/User.interface";
import { CommonService } from "./../../shared/common.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private commonService: CommonService) {}

  ngOnInit(): void {}
  users: User[] = [];
  userForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  validateUser() {
    this.commonService.getAllUsers().subscribe((res) => {
      this.commonService.getAllUsers().subscribe((res: User[]) => {
        this.users = res;
        let user: User = this.userForm.value;
        let loginUser = res.find((dbUser) => {
          return dbUser.email == user.email && dbUser.password == user.password;
        });
        if (loginUser) {
          this.commonService.setProfile(loginUser);
          this.commonService.sendLoginInfo(loginUser);
          this.router.navigate(["product-list"]);
        }
      });
    });
  }
}
