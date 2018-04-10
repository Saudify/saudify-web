import { Component } from '@angular/core';
import { latLng, tileLayer, marker, icon } from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {

  googleMaps = tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    detectRetina: true
  });

  rather = marker([-9.650237, -35.7054677], {
    // icon: icon({
    //   // iconSize: [25,41],

    // })
  });

  options = {
    layers: [ this.googleMaps, this.rather ],
    zoom: 15,
    center: latLng(-9.6456181, -35.7046923)
};
}
