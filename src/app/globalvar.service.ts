import { Injectable } from "@angular/core";

@Injectable()
export class GlobalvarService {
  private judul: String = "";
  private isi: String = "";
  private tanggal: String = "";

  constructor() {}

  public getjudul() {
    return this.judul;
  }
  public getisi() {
    return this.isi;
  }
  public gettanggal() {
    return this.tanggal;
  }
  public setjudul(x: String) {
    this.judul = x;
  }
  public setisi(x: String) {
    this.isi = x;
  }
  public settanggal(x: String) {
    this.tanggal = x;
  }
}
