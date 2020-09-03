import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { User, SampleUser } from "./User.interface";
@Component({
  selector: "app-dialogue-content",
  templateUrl: "./dialogue-content.component.html",
  styleUrls: ["./dialogue-content.component.css"],
})
export class DialogueContentComponent implements OnInit {
  constructor() {}

  users: SampleUser[] = [{ fname: "Murali", lname: "Krishna" }];

  ngOnInit(): void {}

  userForm = new FormGroup({
    fullName: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    confirmPass: new FormControl(""),
  });

  addUser(userForm: FormGroup) {
    console.log(userForm.value);
  }
}
