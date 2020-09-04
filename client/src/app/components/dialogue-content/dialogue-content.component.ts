import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User, SampleUser } from "./User.interface";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
@Component({
  selector: "app-dialogue-content",
  templateUrl: "./dialogue-content.component.html",
  styleUrls: ["./dialogue-content.component.css"],
})
export class DialogueContentComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogueContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  users: SampleUser[] = [{ fname: "Murali", lname: "Krishna" }];

  ngOnInit(): void {}

  userForm = new FormGroup({
    fullName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
    confirmPass: new FormControl("", Validators.required),
  });

  addUser(userForm: FormGroup) {
    this.dialogRef.close(userForm.value);
  }
}
