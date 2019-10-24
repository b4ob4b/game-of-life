import { Component } from "@angular/core";
import { ControlpanelComponent } from "../controlpanel/controlpanel.component";

// const CELL_PAD_SIZE: number = 10;
@Component({
  selector: "app-cellpad",
  templateUrl: "./cellpad.component.html",
  styleUrls: ["./cellpad.component.css"]
})
export class CellpadComponent {
  height: number[];
  width: number[];
  livingCells: boolean[][];

  constructor(private controller: ControlpanelComponent) {
    this.changeCellPadSize(controller.sizeCellPad);
    this.livingCells = [];

    for (var i: number = 0; i < controller.sizeCellPad; i++) {
      this.livingCells[i] = [];
      for (var j: number = 0; j < controller.sizeCellPad; j++) {
        this.livingCells[i][j] = false;
      }
    }
  }

  onResizeClicked(cellPadSize: number): void {
    console.log("Call from cellPad: " + cellPadSize);
    this.changeCellPadSize(cellPadSize);
  }

  changeStatus(xCoordinate: number, yCoordinate: number): void {
    console.log("clicked: x=" + xCoordinate + " y=" + yCoordinate);
    this.livingCells[xCoordinate][yCoordinate] = !this.livingCells[xCoordinate][
      yCoordinate
    ];
    console.log("status=" + this.livingCells[xCoordinate][yCoordinate]);
  }

  changeCellPadSize(sizeCellPad): void {
    this.height = Array(sizeCellPad)
      .fill(0)
      .map((x, i) => i);
    this.width = Array(sizeCellPad)
      .fill(0)
      .map((x, i) => i);

    this.livingCells = [];
    for (var i: number = 0; i < sizeCellPad; i++) {
      this.livingCells[i] = [];
      for (var j: number = 0; j < sizeCellPad; j++) {
        this.livingCells[i][j] = false;
      }
    }
    console.log("height: " + this.height + "\nwidth: " + this.width);
  }
}
