import { TestBed, inject } from '@angular/core/testing';

import { EmpaddService } from './empadd.service';

describe('EmpaddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpaddService]
    });
  });

  it('should be created', inject([EmpaddService], (service: EmpaddService) => {
    expect(service).toBeTruthy();
  }));
});
