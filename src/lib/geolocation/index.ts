import { Point, Marker, marker, latLng, icon } from 'leaflet';

/**
 * Get the current user location.
 * @returns {Promise<Point>}
 */
export function currentLocation(geolocation: any): Promise<Point> {
  return new Promise((resolve, reject) => {
    geolocation
      .getCurrentPosition(
        ({ coords }) => {
          const point = new Point(
            coords.longitude, coords.latitude);
          resolve(point);
        },
        err => reject(err)
      );
  });
}

/**
 * Create a new marker.
 * @param point Point
 * @returns {Marker}
 */
export function createMarker(point: Point): Marker {
  const { y, x } = point;
  const coords = latLng([y, x]);
  return marker(coords, {
    icon: icon({
      iconUrl: 'assets/marker-icon.png'
    })
  });
}
