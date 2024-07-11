import { TestBed } from '@angular/core/testing';

import { SchedualService } from './schedual.service';

describe('SchedualService', () => {
  let service: SchedualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchedualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
