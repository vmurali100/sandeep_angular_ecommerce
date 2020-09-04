import { CommonService } from "./shared/common.service";
import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogueContentComponent } from "./components/dialogue-content/dialogue-content.component";
import { Route } from "@angular/compiler/src/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "client";
  constructor(
    private dialog: MatDialog,
    private commonService: CommonService,
    private route: Router
  ) {}
  registerUser() {
    const dialogRef = this.dialog.open(DialogueContentComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.commonService.registerUser(result).subscribe((res) => {
        console.log("User Added Successfully");
        this.route.navigate(["login"]);
      });
    });
  }
}
