import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HttpService } from './http.service';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
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
    it('should call get request without querystring params', () => {
      const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
      httpClientSpy.get.and.returnValue({ map: () => { } });
      const service: HttpService = new HttpService(httpClientSpy);
      service.get('foo');
      expect(httpClientSpy.get).toHaveBeenCalled();
      expect(httpClientSpy.get).toHaveBeenCalledWith('https://localhost:3000/v1/foo', { params: {} });
    });
  });
});
