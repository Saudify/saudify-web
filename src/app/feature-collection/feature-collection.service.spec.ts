import { TestBed, inject } from '@angular/core/testing';

import { FeatureCollectionService } from './feature-collection.service';

describe('FeatureCollectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureCollectionService]
    });
  });

  it('should be created', inject([FeatureCollectionService], (service: FeatureCollectionService) => {
    expect(service).toBeTruthy();
  }));
});
