import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { FeatureCollectionModule } from './feature-collection/feature-collection.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        LeafletModule.forRoot(),
        SharedModule,
        FeatureCollectionModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have api defined', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const { markers, baseLayers, onMapReady } = fixture.componentInstance;
    expect(markers).toBeTruthy();
    expect(baseLayers).toBeTruthy();
    expect(typeof onMapReady).toEqual('function');
  }));

  it('should render section map tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    const actual = compiled.querySelector('section.map');
    expect(actual).toBeTruthy();
  }));
});
