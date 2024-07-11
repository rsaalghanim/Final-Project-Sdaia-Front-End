import { TestBed } from '@angular/core/testing';

import { MedicalreportsService } from './medicalreports.service';

describe('MedicalreportsService', () => {
  let service: MedicalreportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalreportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
