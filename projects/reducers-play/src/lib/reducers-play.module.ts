import { HomeComponent } from './home.component';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './routing.module';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { ReducersPlayComponent } from './reducers-play.component';

@NgModule({
  declarations: [ReducersPlayComponent, HomeComponent, AuthComponent],
  imports: [
    RoutingModule,
    BrowserModule
  ],
  exports: [ReducersPlayComponent, HomeComponent, AuthComponent]
})
export class ReducersPlayModule { }

