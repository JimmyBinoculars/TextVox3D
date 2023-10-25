/**
 * Repeats a string an amount of times - For developers
 *
 * @param {string} string - The string to be repeated
 * @param {number} times - How many times to repeat the string
 * @return {string} - Returns the string repeated n times
 */
exports.repeatStringNumTimes = function repeatStringNumTimes(string, times) {
  let repeatedString = '';
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
};

/**
 * A class for generating a mesh
 *
 * @class
 * @property {Array<Array<number>>} points - A list of all the points
 * @property {Array<Array<number>>} edges - A list of all the edges
 * @property {Array<Array<number>>} faces - A list of all the faces
 */
exports.Mesh = class Mesh {
  /**
   * A constructor for making a mesh
   *
   * @param {Array<Array<number>>} points - A list of all the points
   * @param {Array<Array<number>>} edges - A list of all the edges
   * @param {Array<Array<number>>} faces - A list of all the faces
   */
  constructor(points, edges, faces) {
    this.points = points;
    this.edges = edges;
    this.faces = faces;
  }
};

/**
 * A class for any kind of gameobject
 *
 * @class
 * @property {number} mesh - A container for the asscociated mesh
 */
exports.GameObject = class GameObject {
  /**
   * A constructor for making GameObjects
   *
   * @param {number} mesh - A container for the associated mesh
   * @param {Array<number>} pos - The position of the object
   * @param {Array<number>} rot - The rotation of the object
   */

  constructor(mesh, pos, rot) {
    this.mesh = mesh;
    this.pos = pos;
    this.rot = rot;
  }
};
exports.Camera = class Camera {
  constructor(fov, samples, pos, rot) {
    this.fov = fov;
    this.samples = samples;
    this.pos = pos;
    this.rot = rot;
  }
};
exports.Viewport = class Viewport {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
};
exports.GetMesh = function getMesh(meshName) {
  switch (meshName) {
    case 'cube':
      return {'points': [[1, 1, 1], [-1, 1, 1], [-1, -1, 1], [1, -1, 1], [1, -1, -1], [1, 1, -1], [-1, -1, -1], [-1, 1, -1]], 'edges': [[0, 1], [0, 5], [0, 3], [1, 2], [1, 7], [2, 3], [2, 6], [3, 4], [4, 5], [4, 6], [5, 7], [7, 6]], 'faces': [[1, 3, 5, 2], [2, 8, 3, 7], [7, 5, 9, 6], [0, 4, 1, 10], [3, 4, 6, 11]]};
  }
};

exports.raycast = function raycast(camera, viewport, items) {
  return;
};
