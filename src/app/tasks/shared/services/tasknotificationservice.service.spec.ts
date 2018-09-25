import { TestBed, inject } from '@angular/core/testing';

import { TasknotificationserviceService } from './tasknotificationservice.service';

describe('TasknotificationserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TasknotificationserviceService]
    });
  });

  it('should be created', inject([TasknotificationserviceService], (service: TasknotificationserviceService) => {
    expect(service).toBeTruthy();
  }));
});
