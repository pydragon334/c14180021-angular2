import { Component, OnInit } from "@angular/core";
import { GlobalvarService } from "../globalvar.service";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit {
  constructor(public globalvar: GlobalvarService) {}
  judul = "";
  isi = "";
  tanggal = "";
  ngOnInit() {}
  NOTE() {}
}
