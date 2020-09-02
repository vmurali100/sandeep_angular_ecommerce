import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogueContentComponent } from "./components/dialogue-content/dialogue-content.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}
  registerUser() {
    this.dialog.open(DialogueContentComponent);
  }
}
