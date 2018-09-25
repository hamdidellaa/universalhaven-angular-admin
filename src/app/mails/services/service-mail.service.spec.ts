import { TestBed, inject } from '@angular/core/testing';

import { ServiceMailService } from './service-mail.service';

describe('ServiceMailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceMailService]
    });
  });

  it('should be created', inject([ServiceMailService], (service: ServiceMailService) => {
    expect(service).toBeTruthy();
  }));
});
