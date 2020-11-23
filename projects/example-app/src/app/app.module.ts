import { MenuProductsModule } from './../../../menu-products/src/lib/menu-products.module';
import { ReducersPlayModule } from './../../../reducers-play/src/lib/reducers-play.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReducersPlayModule,
    MenuProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
