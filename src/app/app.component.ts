import { Component } from '@angular/core';
import { latLng, tileLayer, marker, icon, Map, Layer } from 'leaflet';
import { currentLocation } from '../lib/geolocation';

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
    const { latitude, longitude } = await currentLocation();
    const coords = latLng([latitude, longitude]);
    const intialMarker: Layer = marker(coords, {
      icon: icon({
        iconUrl: 'assets/marker-icon.png'
      })
    });

    map.setView(coords, 15);
    this.markers.push(intialMarker);
  }
}
