import { Point, Marker } from 'leaflet';
import { currentLocation, createMarker } from './';

describe('Geolocation', () => {
  describe('createMarker', () => {
    it('should return a Marker instance', () => {
      const point = new Point(-105, 30);
      const m = createMarker(point);
      expect(m).toBeTruthy(m instanceof Point);
      expect(m.getLatLng().lat).toEqual(point.y);
      expect(m.getLatLng().lng).toEqual(point.x);
    });
  });

  describe('currentLocation', () => {
    it('should resolve with a Point', (done: DoneFn) => {
      const latitude = 30;
      const longitude = -105;
      const geolocationMock = {
        getCurrentPosition: success => success({
          coords: {
            latitude,
            longitude
          }
        })
      };

      currentLocation(geolocationMock)
        .then((point: Point) => {
          expect(point.x).toEqual(longitude);
          expect(point.y).toEqual(latitude);
          done();
        });
    });
  });
});
