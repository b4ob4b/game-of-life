import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CellpadComponent } from './cellpad/cellpad.component';
import { ControlpanelComponent } from './controlpanel/controlpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    CellpadComponent,
    ControlpanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
