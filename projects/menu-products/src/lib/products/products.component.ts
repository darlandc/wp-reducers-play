import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-products-component',
  template: `
    <p>
      products component works!
    </p>
  `,
  styles: [
  ]
})
export class ProductsComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    console.log(999)
  }

}
