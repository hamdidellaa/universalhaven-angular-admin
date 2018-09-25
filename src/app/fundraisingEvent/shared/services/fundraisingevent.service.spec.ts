import { TestBed, inject } from '@angular/core/testing';

import { FundraisingeventService } from './fundraisingevent.service';

describe('FundraisingeventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FundraisingeventService]
    });
  });

  it('should be created', inject([FundraisingeventService], (service: FundraisingeventService) => {
    expect(service).toBeTruthy();
  }));
});
