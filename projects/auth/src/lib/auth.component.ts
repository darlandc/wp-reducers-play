import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-authentication',
  template: `
    <p>
      auth works!
    </p>
  `,
  styles: [
  ]
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(333);
  }

}
