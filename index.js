/**
 * Repeats a string an amount of times - For developers
 *
 * @param {string} string - The string to be repeated
 * @param {number} times - How many times to repeat the string
 * @return {string} - Returns the string repeated n times
 */
exports.repeatStringNumTimes = function repeatStringNumTimes(string, times) {
  let repeatedString = "";
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
 * @property {Mesh} mesh - A container for the asscociated mesh
 * @property {Array<number>} pos - The position of the object
 * @property {Array<number>} rot - The rotation of the object
 */
exports.GameObject = class GameObject {
  /**
   * A constructor for making GameObjects
   *
   * @param {Mesh} mesh - A container for the associated mesh
   * @param {Array<number>} pos - The position of the object
   * @param {Array<number>} rot - The rotation of the object
   */
  constructor(mesh, pos, rot) {
    this.mesh = mesh;
    this.pos = pos;
    this.rot = rot;
  }
};
/**
 * A class for the camera type
 *
 * @class
 * @property {number} fov - A property for the field of view (in degrees)
 * @property {number} samples - A property for the samples variable
 * @property {Array<number>} pos - A property for the position variable
 * @property {Array<number>} rot - A property for the rotation variable
 */
exports.Camera = class Camera {
  /**
   * A constructor for making cameras
   *
   * @param {number} fl - A property for focal length (in degrees)
   * @param {number} samples - A property for the samples variable
   * @param {Array<number>} pos - A property for the position variable
   * @param {Array<number>} rot - A property for the rotation variable
   */
  constructor(fl, samples, pos, rot) {
    this.fl = fl;
    this.fov = (1 / 18) * fl;
    this.samples = samples;
    this.pos = pos;
    this.rot = rot;
  }
};
/**
 * A class for the viewport object
 *
 * @class
 * @property {number} width - A container for the width variable
 * @property {number} height - A container for the height variable
 */
exports.Viewport = class Viewport {
  /**
   * A constructor for making Viewports
   *
   * @param {number} width - A container for the width variable
   * @param {number} height - A container for the height variable
   */
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
};
/**
 * A function for getting preset objects
 *
 * @param {string} meshName - The name of the mesh you want to get
 * @returns {this.Mesh}
 */
exports.getMesh = function getMesh(meshName) {
  switch (meshName) {
    case "cube":
      return {
        points: [
          [1, 1, 1],
          [-1, 1, 1],
          [-1, -1, 1],
          [1, -1, 1],
          [1, -1, -1],
          [1, 1, -1],
          [-1, -1, -1],
          [-1, 1, -1],
        ],
        edges: [
          [0, 1],
          [0, 5],
          [0, 3],
          [1, 2],
          [1, 7],
          [2, 3],
          [2, 6],
          [3, 4],
          [4, 5],
          [4, 6],
          [5, 7],
          [7, 6],
        ],
        faces: [
          [1, 3, 5, 2],
          [2, 8, 3, 7],
          [7, 5, 9, 6],
          [0, 4, 1, 10],
          [3, 4, 6, 11],
        ],
      };
    case "square":
      mesh = new this.Mesh([[0, 0], [2, 0], [2, 2], [0, 2]], [[0, 1], [1, 2], [0, 3], [2, 3]], [[0, 1, 2, 3]])
      return mesh
  }
};
/**
 * A function for rendering the scene once
 * @param {this.Camera} camera
 * @param {this.Viewport} viewport
 * @param {List<this.GameObject>} items
 */
exports.render = function render(camera, viewport, items) {
  return;
};
