import { TestBed } from '@angular/core/testing';

import { ConsultaionService } from './consultaion.service';

describe('ConsultaionService', () => {
  let service: ConsultaionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
