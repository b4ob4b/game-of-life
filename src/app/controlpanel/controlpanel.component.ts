import { Component, EventEmitter, Output, Input } from "@angular/core";
@Component({
  selector: "app-controlpanel",
  templateUrl: "./controlpanel.component.html",
  styleUrls: ["./controlpanel.component.css"]
})
export class ControlpanelComponent {
  sizeCellPad: number = 10;

  @Output() startEvolutionClicked = new EventEmitter();
  @Output() randomLifeClicked = new EventEmitter();
  @Output() resizeClicked = new EventEmitter();

  @Input() evolutionIsRunning: boolean;

  constructor() {}

  startEvolution(): void {
    this.startEvolutionClicked.emit();
  }

  injectRandomLife(): void {
    this.randomLifeClicked.emit();
  }

  resizeCellPad(): void {
    this.resizeClicked.emit(this.sizeCellPad);
  }
}
