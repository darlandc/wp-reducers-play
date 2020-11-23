import { ProductsModule } from './products/products.module';
import { Routes } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuProductsComponent } from './menu-products.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [MenuProductsComponent],
  imports: [
    // StoreModule.forRoot(reducers, {
    //   metaReducers
    // }),
    StoreModule.forRoot({}, {}),
    ProductsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [MenuProductsComponent]
})
export class MenuProductsModule { }
