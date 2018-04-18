import { Component } from '@angular/core';
import { latLng, tileLayer, marker, icon, Map, Layer } from 'leaflet';

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
    zoom: 15,
    center: latLng(-9.6456181, -35.7046923)
  };

  public markers: Layer[] = [];

  onMapReady(map: Map): void {
    // TODO: Get current user coordinates
    const coords = latLng([-9.650237, -35.7054677]);
    const intialMarker: Layer = marker(coords, {
      icon: icon({
        iconUrl: 'assets/marker-icon.png'
      })
    });

    map.setView(coords, 15);
    this.markers.push(intialMarker);
  }
}
