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

  userForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  validateUser() {
    this.commonService.getAllUsers().subscribe((res) => {
      // this.router.navigate(["product-list"]);
    });
  }
}
