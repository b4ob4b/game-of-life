import {
  Component,
  OnInit,
  OnChanges,
  Injectable,
  EventEmitter,
  Output
} from "@angular/core";
// import { CellpadComponent } from "../cellpad/cellpad.component";

@Component({
  selector: "app-controlpanel",
  templateUrl: "./controlpanel.component.html",
  styleUrls: ["./controlpanel.component.css"]
})
// @Injectable({
//   providedIn: "root"
// })
export class ControlpanelComponent {
  sizeCellPad: number = 6;

  // @Output() resizeClicked: EventEmitter<number> = new EventEmitter<number>();
  @Output() resizeClicked = new EventEmitter();

  constructor() {}

  resizeCellPad(): void {
    this.resizeClicked.emit(this.sizeCellPad);
  }
}
