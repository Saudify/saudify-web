import { currentLocation } from './geolocation'
import Point from './point'

describe('Geolocation', () => {
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
          expect(point.latitude).toEqual(latitude)
          expect(point.longitude).toEqual(longitude)
          done()
        })
    })
  })
})
