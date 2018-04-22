/**
 * Get the current user location.
 * @returns {Promise<Object>}
 */
export function currentLocation(): Promise<any> {
  return new Promise((resolve, reject) => {
    navigator
      .geolocation
      .getCurrentPosition(
        ({ coords }) => resolve({
          latitude: coords.latitude,
          longitude: coords.longitude
        }),
        err => reject(err)
      );
  });
}
