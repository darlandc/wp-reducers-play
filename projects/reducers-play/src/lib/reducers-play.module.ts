import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing.module';
import { NgModule } from '@angular/core';
import { ReducersPlayComponent } from './reducers-play.component';

@NgModule({
  declarations: [ReducersPlayComponent, HomeComponent],
  imports: [
    RoutingModule,
    BrowserModule
  ],
  exports: [ReducersPlayComponent, HomeComponent]
})
export class ReducersPlayModule { }

