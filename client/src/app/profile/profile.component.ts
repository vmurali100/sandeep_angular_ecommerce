import { CommonService } from "./../shared/common.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  profile: any;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.getProfile().subscribe((res) => {
      this.profile = res;
      console.log(this.profile);
    });
  }
}
