import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"],
})
export class SignInComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  test() {
    this.router.navigateByUrl("/user/profile");
  }
  test1() {
    this.router.navigateByUrl("/user/athonticat");
  }
}
