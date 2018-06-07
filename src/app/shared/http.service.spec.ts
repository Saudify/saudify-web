import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HttpService } from './http.service';
import { environment } from '../../environments/environment';

const setupHttpSpy = () => {
  const spy = jasmine.createSpyObj('HttpClient', ['get']);
  spy.get.and.returnValue({ map: () => { } });
  return spy;
};

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
    let httpClientSpy;

    beforeAll(() => {
      httpClientSpy = setupHttpSpy();
    });

    afterEach(() => httpClientSpy.get.calls.reset());

    it('should call get request without querystring params', () => {
      const service: HttpService = new HttpService(httpClientSpy);

      service.get('foo');

      expect(httpClientSpy.get).toHaveBeenCalled();
      expect(httpClientSpy.get).toHaveBeenCalledWith(`${environment.apiUrl}foo`, { params: {} });
    });

    it('should call get request with querystring', () => {
      const service: HttpService = new HttpService(httpClientSpy);
      const params = { lat: 30, lng: -105 };

      service.get('foo', params);

      expect(httpClientSpy.get).toHaveBeenCalled();
      expect(httpClientSpy.get.calls.argsFor(0)[1].params.toString()).toEqual('lat=30&lng=-105');
    });
  });
});
