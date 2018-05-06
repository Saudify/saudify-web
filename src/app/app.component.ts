import { Component } from '@angular/core';
import { tileLayer, Map, Layer, Point, Marker, LatLng } from 'leaflet';

import { currentLocation, createMarker } from '../lib/geolocation';
import { FeatureCollectionService } from './feature-collection/feature-collection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  public baseLayers: Object = {
    'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Open Street Map'
    })
  };

  public markers: Layer[] = [];

  constructor(
    private featureCollection: FeatureCollectionService) { }

  async onMapReady(map: Map): Promise<void> {
    // TODO: handle and show message on error
    const currentPoint: Point = await currentLocation(navigator.geolocation);
    const initialMarker: Marker = createMarker(currentPoint);
    const coords: LatLng = initialMarker.getLatLng();

    this.featureCollection
      .fetchAll(coords)
      .subscribe(res => {
        const { data } = res;

        data.forEach(point => {
          const [ lng, lat ] = point.geometry.coordinates;
          const pointInstance = new Point(lng, lat);
          const markerToAdd = createMarker(pointInstance);
          this.markers.push(markerToAdd);
        });
      });

    map.setView(coords, 15);
    this.markers.push(initialMarker);
  }
}
