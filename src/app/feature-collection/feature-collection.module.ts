import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureCollectionService } from './feature-collection.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    FeatureCollectionService
  ]
})
export class FeatureCollectionModule { }
