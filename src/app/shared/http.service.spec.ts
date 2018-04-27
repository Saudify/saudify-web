import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        HttpClient,
        HttpService
      ]
    });
  });

  describe('creation', () => {
    it('should be created', inject([HttpService], (service: HttpService) => {
      expect(service).toBeTruthy();
    }));
  });

  describe('get', () => {
    it('should call get request with no querystring params', inject([HttpService], (service: HttpService) => {
      service.get();
    }));
  });
});
