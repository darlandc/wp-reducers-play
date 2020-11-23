import { ProductsShellComponent } from './products-shell.component';
import { ProductsComponent } from './products.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';

const productRoutes: Routes = [
  { path: 'products', component: ProductsShellComponent }
];

@NgModule({
  declarations: [ProductsComponent, ProductsShellComponent],
  imports: [
    RouterModule.forChild(productRoutes),
    StoreModule.forFeature('products', {})
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ProductsComponent, ProductsShellComponent]
})
export class ProductsModule { }
