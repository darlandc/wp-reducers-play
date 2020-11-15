import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sec-update',
  templateUrl: './sec-update.component.html'
})
export class SecUpdateComponent implements OnInit {

  step = 0;
  totalSteps = 3;

  constructor() { }

  ngOnInit(): void { }
  prev(): number {
    return this.step > 0 ? this.step-- : this.step = 0;
  }
  next(totalSteps): number {
    if (this.step !== totalSteps) {
      return this.step++;
    }
  }

}
