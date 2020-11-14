import { TestBed } from '@angular/core/testing';

import { ReducersPlayService } from './reducers-play.service';

describe('ReducersPlayService', () => {
  let service: ReducersPlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReducersPlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
