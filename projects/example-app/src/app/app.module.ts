import { ReducersPlayModule } from './../../../reducers-play/src/lib/reducers-play.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReducersPlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
