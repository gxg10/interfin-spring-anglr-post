import { TestBed } from '@angular/core/testing';

import { RaportService } from './raport.service';

describe('RaportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RaportService = TestBed.get(RaportService);
    expect(service).toBeTruthy();
  });
});
