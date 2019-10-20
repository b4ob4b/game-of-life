import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cellpad",
  templateUrl: "./cellpad.component.html",
  styleUrls: ["./cellpad.component.css"]
})
const CELL_PAD_SIZE: number = 10;

export class CellpadComponent implements OnInit {
  height: number[];
  width: number[];
  livingCells: boolean[][];

  constructor() {
    this.height = Array(CELL_PAD_SIZE)
      .fill(0)
      .map((x, i) => i);
    this.width = Array(CELL_PAD_SIZE)
      .fill(0)
      .map((x, i) => i);

    this.livingCells = [];

    for (var i: number = 0; i < CELL_PAD_SIZE; i++) {
      this.livingCells[i] = [];
      for (var j: number = 0; j < CELL_PAD_SIZE; j++) {
        this.livingCells[i][j] = false;
      }
    }
  }

  changeStatus(xCoordinate: number, yCoordinate: number): void {
    this.livingCells[xCoordinate][yCoordinate] = !this.livingCells[xCoordinate][
      yCoordinate
    ];
  }

  ngOnInit() {}
}
