import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LatLng } from 'leaflet';

import { HttpService } from './../shared/http.service';

@Injectable()
export class FeatureCollectionService {

  constructor(private httpService: HttpService) { }

  fetchAll(coords: LatLng): Observable<any> {
    return this.httpService.get('feature-collections', {
      lat: coords.lat,
      lng: coords.lng
    });
  }
}
