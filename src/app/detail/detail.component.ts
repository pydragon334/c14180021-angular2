import { Component, OnInit } from "@angular/core";
import { GlobalvarService } from "../globalvar.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  constructor(public globalvar: GlobalvarService) {}
  judul;
  isi;
  tanggal;

  ngOnInit() {
    this.judul = this.globalvar.getjudul();
    this.isi = this.globalvar.getisi();
    this.tanggal = this.globalvar.gettanggal();
  }
}
