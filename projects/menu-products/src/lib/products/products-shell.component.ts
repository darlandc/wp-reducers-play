import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'lib-products-shell-component',
  template: `
    <p>
      products shell component works!
    </p>
  `,
  styles: [
  ]
})
export class ProductsShellComponent implements OnInit, OnDestroy {
  id: number;
  sub = new Subscription();

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.sub = this.route.params.subscribe(params => {
    //    this.id = +params['id']; // (+) converts string 'id' to a number
    // });

    console.log('productssss');
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
