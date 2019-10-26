import { Component } from "@angular/core";
import { ControlpanelComponent } from "../controlpanel/controlpanel.component";

@Component({
  selector: "app-cellpad",
  templateUrl: "./cellpad.component.html",
  styleUrls: ["./cellpad.component.css"]
})
export class CellpadComponent {
  sideLength: number[];
  livingCells: boolean[][];
  populationIndex: number[][];
  evolutionIsRunning: boolean = false;
  lastStates = new Array();
  private autoSaveInterval: number;

  constructor(private controller: ControlpanelComponent) {
    this.initializeCellPad(controller.sizeCellPad);
    this.lastStates = Array(2)
      .fill(0)
      .map((x, i) => i);
  }

  onResizeClicked(cellPadSize: number): void {
    this.initializeCellPad(cellPadSize);
    this.evolutionIsRunning = false;
  }

  onStartEvolutionClicked(): void {
    if (!this.evolutionIsRunning) {
      this.autoSaveInterval = window.setInterval(
        () => this.checkNextLiveCycle(),
        200
      );
      this.evolutionIsRunning = true;
    } else {
      window.clearInterval(this.autoSaveInterval);
      this.evolutionIsRunning = false;
    }
  }

  onRandomLifeClicked(): void {
    this.initializeCellPad(this.sideLength.length, true);
  }

  changeStatus(xCoordinate: number, yCoordinate: number): void {
    this.livingCells[xCoordinate][yCoordinate] = !this.livingCells[xCoordinate][
      yCoordinate
    ];
  }

  initializeCellPad(sizeCellPad, randomLife = false): void {
    this.sideLength = Array(sizeCellPad)
      .fill(0)
      .map((x, i) => i);

    this.livingCells = [];
    this.populationIndex = [];
    for (var i: number = 0; i < sizeCellPad; i++) {
      this.livingCells[i] = [];
      this.populationIndex[i] = [];
      for (var j: number = 0; j < sizeCellPad; j++) {
        if (randomLife) {
          this.livingCells[i][j] = Math.random() >= 0.5;
        } else {
          this.livingCells[i][j] = false;
        }
        this.populationIndex[i][j] = 0;
      }
    }
  }

  checkNeighbours(): void {
    for (var i: number = 1; i < this.livingCells.length - 1; i++) {
      for (var j: number = 1; j < this.livingCells.length - 1; j++) {
        this.populationIndex[i][j] =
          Number(this.livingCells[i - 1][j - 1]) +
          Number(this.livingCells[i - 1][j]) +
          Number(this.livingCells[i - 1][j + 1]) +
          Number(this.livingCells[i][j - 1]) +
          Number(this.livingCells[i][j + 1]) +
          Number(this.livingCells[i + 1][j - 1]) +
          Number(this.livingCells[i + 1][j]) +
          Number(this.livingCells[i + 1][j + 1]);
      }
    }
  }

  checkNextLiveCycle(): void {
    this.checkNeighbours();
    if (this.checkForChanges()) {
      this.evolutionIsRunning = false;
      window.clearInterval(this.autoSaveInterval);
    } else {
      this.calculateNextState();
    }
  }

  checkForChanges(): boolean {
    var sumOfLivingCells: number = 0;
    var hasStateChanged: boolean = false;

    this.livingCells.forEach(n =>
      n.forEach(n => (sumOfLivingCells += Number(n)))
    );

    var sumOfPopulationIndex: number = 0;
    this.populationIndex.forEach(n =>
      n.forEach(n => (sumOfPopulationIndex += n))
    );

    this.lastStates[0] = this.lastStates[1];
    this.lastStates[1] = sumOfPopulationIndex;

    hasStateChanged =
      sumOfLivingCells == 0 || this.lastStates[0] == this.lastStates[1];

    return hasStateChanged;
  }

  calculateNextState(): void {
    for (var i: number = 0; i < this.livingCells.length; i++) {
      for (var j: number = 0; j < this.livingCells.length; j++) {
        if (!this.livingCells[i][j] && this.populationIndex[i][j] == 3) {
          this.livingCells[i][j] = true;
        }
        if (this.livingCells[i][j]) {
          if (
            this.populationIndex[i][j] < 2 ||
            this.populationIndex[i][j] > 3
          ) {
            this.livingCells[i][j] = false;
          }
        }
      }
    }
  }
}
