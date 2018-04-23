import Point from './point'

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
            coords.latitude, coords.longitude)
          resolve(point)
        },
        err => reject(err)
      );
  });
}
