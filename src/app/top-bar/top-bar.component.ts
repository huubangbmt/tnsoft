import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"]
})
export class TopBarComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  openNav() {
    document.getElementById("mySidenav").style.width = "100%"; 
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0"; 
  }
}
