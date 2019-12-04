import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  code = "admin";
  password = "123456";
  Login() {
    alert(this.code + this.password);
  }
  constructor() {}

  ngOnInit() {}
}
