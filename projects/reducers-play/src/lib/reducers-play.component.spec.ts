import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReducersPlayComponent } from './reducers-play.component';

describe('ReducersPlayComponent', () => {
  let component: ReducersPlayComponent;
  let fixture: ComponentFixture<ReducersPlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReducersPlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReducersPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
