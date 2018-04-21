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
    zoom: 15
  };

  public markers: Layer[] = [];

  onMapReady(map: Map): void {
    // TODO: Put this code into
    // a separated function
    navigator
      .geolocation
      .getCurrentPosition(
        pos => {
          const { latitude, longitude } = pos.coords;
          const coords = latLng([latitude, longitude]);
          const intialMarker: Layer = marker(coords, {
            icon: icon({
              iconUrl: 'assets/marker-icon.png'
            })
          });

          map.setView(coords, 15);
          this.markers.push(intialMarker);
        },
        err => console.log(err) // TODO: show error message
      );

  }
}
