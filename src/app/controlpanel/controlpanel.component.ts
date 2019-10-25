import { Component, EventEmitter, Output } from "@angular/core";
@Component({
  selector: "app-controlpanel",
  templateUrl: "./controlpanel.component.html",
  styleUrls: ["./controlpanel.component.css"]
})
export class ControlpanelComponent {
  sizeCellPad: number = 10;

  @Output() startEvolutionClicked = new EventEmitter();
  @Output() resizeClicked = new EventEmitter();

  constructor() {}

  resizeCellPad(): void {
    this.resizeClicked.emit(this.sizeCellPad);
  }

  startEvolution(): void {
    this.startEvolutionClicked.emit();
  }
}
