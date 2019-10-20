import { Component, OnInit, OnChanges } from "@angular/core";

@Component({
  selector: "app-controlpanel",
  templateUrl: "./controlpanel.component.html",
  styleUrls: ["./controlpanel.component.css"]
})
export class ControlpanelComponent implements OnInit, OnChanges {
  sizeCellPad: number;

  constructor() {}

  ngOnInit() {}
  ngOnChanges() {}

  resizeCellPad(): void {
    // this.sizeCellPad =
    console.log(this.sizeCellPad);
  }
}
