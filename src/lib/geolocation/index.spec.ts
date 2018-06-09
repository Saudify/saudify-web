import { Point, Marker } from 'leaflet';
import { currentLocation, createMarker } from './';

describe('Geolocation', () => {
  describe('createMarker', () => {
    it('should create marker with default icon path', () => {
      const point = new Point(-105, 30);
      const m = createMarker(point);
      expect(m).toBeTruthy(m instanceof Point);
      expect(m.options.icon.options.iconUrl).toEqual('assets/marker-icon.png');
    });

    it('should create marker with icon path receive in argument', () => {
      const iconPath = 'assets/marker.png';
      const point = new Point(-105, 30);
      const m = createMarker(point, iconPath);
      expect(m).toBeTruthy(m instanceof Point);
      expect(m.options.icon.options.iconUrl).toEqual(iconPath);
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
