import { Component } from '@angular/core';
import { tileLayer, Map, Layer, Point, Marker, LatLng } from 'leaflet';
import { currentLocation, createMarker } from '../lib/geolocation';

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

  public options: Object = {
    zoom: 15
  };

  public markers: Layer[] = [];

  async onMapReady(map: Map): Promise<void> {
    // TODO: handle and show message on error
    const currentPoint: Point = await currentLocation(navigator.geolocation);
    const initialMarker: Marker = createMarker(currentPoint);
    const coords: LatLng = initialMarker.getLatLng();

    map.setView(coords, 15);
    this.markers.push(initialMarker);
  }
}
