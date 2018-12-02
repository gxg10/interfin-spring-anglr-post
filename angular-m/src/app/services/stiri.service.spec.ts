import { TestBed } from '@angular/core/testing';

import { StiriService } from './stiri.service';

describe('StiriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StiriService = TestBed.get(StiriService);
    expect(service).toBeTruthy();
  });
});
