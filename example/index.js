const lib = require('textvox3d');

/**
 * Calculate viewport dimensions.
 *
 * @param {object} camera - The camera object.
 * @param {number} d - Distance.
 * @param {number} cubeSize - The size of the cube.
 * @return {object} - Object containing the width and height of the viewport.
 */
function calibrateViewportDimensions(camera, d, cubeSize) {
  const focalLength = camera.fl;
  const viewportHeight = 2 * cubeSize;
  const viewportWidth = (viewportHeight * d) / focalLength;

  return {width: viewportWidth, height: viewportHeight};
}

const f = 0;
const camera = new lib.camera(55, 10, [7, -7, 5], [64, 0, 47]);
const viewport = new lib.viewport(process.stdout.columns, process.stdout.rows - 1);

const cubeMesh = lib.getMesh('cube');
const cube = new lib.item(cubeMesh, [0, 0, 0]/* pos */, [0, 0, 0]/* rot */, [2, 2, 2]/* scale */);
// console.log(`Cube mesh: points: ${cubeMesh.points}, edges: ${cubeMesh.edges}`);

// console.log(`Columns: ${process.stdout.columns}, Rows: ${process.stdout.rows}`);

/**
 * Function to test the viewport.
 */
function viewportTest() {
  let i = 0;
  while (i < viewport.height) {
    if (i === 0) {
      const a = lib.repeatStringNumTimes('0', (viewport.width - (f.toString().length + 2)));
      console.log(`${a}f=${f}`);
    } else {
      console.log('0');
    }
    i++;
  }
}

/**
 * Function to update the frame.
 */
function frame() {
  viewportTest();
  f++;
}

frame();
// setInterval(frame, 50)
