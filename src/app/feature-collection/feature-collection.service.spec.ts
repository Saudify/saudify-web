import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { FeatureCollectionService } from './feature-collection.service';
import { SharedModule } from '../shared/shared.module';

describe('FeatureCollectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SharedModule,
      ],
      providers: [
        FeatureCollectionService
      ]
    });
  });

  it('should be created', inject([FeatureCollectionService], (service: FeatureCollectionService) => {
    expect(service).toBeTruthy();
  }));
});
