import { Injectable } from '@angular/core';

import { HttpService } from './../shared/http.service';

@Injectable()
export class FeatureCollectionService {

  constructor(private httpService: HttpService) { }

  fetchAll() {
    return this.httpService.get('feature-collections');
  }
}
