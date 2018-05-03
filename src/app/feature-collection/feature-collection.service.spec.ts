import { latLng } from 'leaflet';

import { HttpService } from './../shared/http.service';
import { FeatureCollectionService } from './feature-collection.service';
import { SharedModule } from '../shared/shared.module';

describe('FeatureCollectionService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let httpService
  let service

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpService = new HttpService(<any>httpClientSpy)
    service = new FeatureCollectionService(httpService)
  });

  describe('fetchAll', () => {
    it('should return feature-collections', (done: DoneFn) => {
      const coords = latLng([-9.66451, -35.69613])

      // TODO: simulate get returns
      // {"code":200,"data":[{"geometry":{"type":"Point","coordinates":[-35.701629913489,-9.6608221516311]},"_id":"5aeb9515f10131001176b3d3","type":{"_id":"5aeb9515f10131001176ad32","name":"UPA PAC 2","__v":0},"createdAt":"2018-05-03T23:02:47.537Z","updatedAt":"2018-05-03T23:02:47.537Z","__v":0},{"geometry":{"type":"Point","coordinates":[-35.795363001733,-9.6375542709699]},"_id":"5aeb9515f10131001176b3bb","type":{"_id":"5aeb9515f10131001176ad32","name":"UPA PAC 2","__v":0},"createdAt":"2018-05-03T23:02:47.536Z","updatedAt":"2018-05-03T23:02:47.536Z","__v":0}],"status":"success"}
      // httpClientSpy.get.and.returnValue();

      service
        .fetchAll(coords)
        .subscribe(result => {
          console.log(result)
          done()
        }, err => { /** nothing */ })
    })
    // it('should return feature-collections', inject([FeatureCollectionService], (service: FeatureCollectionService) => {
    //   const coords = latLng([ -9.66451, -35.69613 ])

    //   service
    //     .fetchAll(coords)
    //     .subscribe(result => {
    //       console.log(result)
    //     }, err => { /** nothing */ })
    //   // expect(service).toBeTruthy();
    // }));
  })
});
