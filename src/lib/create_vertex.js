import * as Constants from '../constants';

/**
 * Returns GeoJSON for a Point representing the
 * vertex of another feature.
 *
 * @param {GeoJSON} parent
 * @param {Array<number>} coordinates
 * @param {string} path - Dot-separated numbers indicating exactly
 *   where the point exists within its parent feature's coordinates.
 * @param {boolean} selected
 * @return {GeoJSON} Point
 */
export default function(parent, coordinates, path, selected) {
  const vertex = {
    type: Constants.geojsonTypes.FEATURE,
    properties: {
      meta: Constants.meta.VERTEX,
      parent: parent.properties && parent.properties.id,
      parentProperties: parent.properties,
      coord_path: path,
      active: selected ?
        Constants.activeStates.ACTIVE :
        Constants.activeStates.INACTIVE
    },
    geometry: {
      type: Constants.geojsonTypes.POINT,
      coordinates
    }
  };

  return vertex;
}
