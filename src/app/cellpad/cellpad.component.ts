import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cellpad",
  templateUrl: "./cellpad.component.html",
  styleUrls: ["./cellpad.component.css"]
})
export class CellpadComponent implements OnInit {
  height: number[];
  width: number[];

  constructor() {
    this.height = Array(10)
      .fill(0)
      .map((x, i) => i);
    this.width = Array(10)
      .fill(0)
      .map((x, i) => i);
  }

  ngOnInit() {}
}
