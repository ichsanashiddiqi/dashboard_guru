import { TestBed } from '@angular/core/testing';

import { SoalService } from './soal.service';

describe('SoalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoalService = TestBed.get(SoalService);
    expect(service).toBeTruthy();
  });
});
