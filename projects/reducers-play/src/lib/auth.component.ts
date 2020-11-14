import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  step = 0;

  constructor() { }

  ngOnInit(): void { }

  prev(){
    this.step > 0 ? this.step-- : this.step = 0;
  }
  next(){
    this.step++
  }


}
