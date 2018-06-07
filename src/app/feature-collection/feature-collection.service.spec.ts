import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { latLng } from 'leaflet';

import { HttpService } from './../shared/http.service';
import { FeatureCollectionService } from './feature-collection.service';
import { SharedModule } from '../shared/shared.module';
import { environment } from '../../environments/environment';

describe('FeatureCollectionService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let httpService;
  let service;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpService = new HttpService(<any>httpClientSpy);
    service = new FeatureCollectionService(httpService);
  });

  describe('fetchAll', () => {
    it('should call `httpClient.get` method correctly', (done: DoneFn) => {
      const coords = latLng([-9.66451, -35.69613]);
      httpClientSpy.get.and.returnValue(Observable.of({}));

      service
        .fetchAll(coords)
        .subscribe(result => {
          expect(httpClientSpy.get.calls.argsFor(0)[0]).toEqual(`${environment.apiUrl}feature-collections`);
          expect(httpClientSpy.get.calls.argsFor(0)[1].params.toString()).toEqual('lat=-9.66451&lng=-35.69613');
          done();
        }, err => { /** nothing */ });
    });

    it('should return feature-collections JSON', (done: DoneFn) => {
      const coords = latLng([-9.66451, -35.69613]);
      /* tslint:disable-next-line:max-line-length */
      const apiJson = { 'code': 200, 'data': [{ 'geometry': { 'type': 'Point', 'coordinates': [-35.701629913489, -9.6608221516311] }, '_id': '5aeb9515f10131001176b3d3', 'type': { '_id': '5aeb9515f10131001176ad32', 'name': 'UPA PAC 2', '__v': 0 }, 'createdAt': '2018-05-03T23:02:47.537Z', 'updatedAt': '2018-05-03T23:02:47.537Z', '__v': 0 }, { 'geometry': { 'type': 'Point', 'coordinates': [-35.795363001733, -9.6375542709699] }, '_id': '5aeb9515f10131001176b3bb', 'type': { '_id': '5aeb9515f10131001176ad32', 'name': 'UPA PAC 2', '__v': 0 }, 'createdAt': '2018-05-03T23:02:47.536Z', 'updatedAt': '2018-05-03T23:02:47.536Z', '__v': 0 }], 'status': 'success' };
      const returns = Observable.of(apiJson);
      httpClientSpy.get.and.returnValue(returns);

      service
        .fetchAll(coords)
        .subscribe(result => {
          expect(result.code).toEqual(200);
          expect(result.data.length).toEqual(2);
          expect(result.status).toEqual('success');
          done();
        }, err => { /** nothing */ });
    });
  });
});
