import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {DpDatePickerModule} from 'ng2-date-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DpDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
