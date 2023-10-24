const lib = require('textvox3d');

function caliblrateViewportDimensions(camera, d, cubeSize) {
  const focalLength = camera.fl;
  const viewportHeight = 2 * cubeSize;
  const viewportWidth = (viewportHeight * d) / focalLength;

  return {width: viewportWidth, height: viewportHeight};
}

const f = 0;
const camera = new lib.camera(55, 10, [7, -7, 5], [64, 0, 47]);
const viewport = new lib.viewport(process.stdout.columns, process.stdout.rows-1);

const cubeMesh = lib.getMesh('cube');
const cube = new lib.item(cubeMesh, [0, 0, 0]/* pos*/, [0, 0, 0]/* rot*/, [2, 2, 2]/* scale*/);
// console.log(`Cube mesh: points: ${cubeMesh.points}, edges: ${cubeMesh.edges}`);

// console.log(`Columns: ${process.stdout.columns}, Rows: ${process.stdout.rows}`);

function viewportTest() {
  let i=0;
  while (i<viewport.height) {
    if (i==0) {
      const a = lib.repeatStringNumTimes('0', (viewport.width-(f.toString().length + 2)));
      console.log(`${a}f=${f}`);
    } else {
      console.log('0');
    }
    i++;
  }
};

function frame() {
  viewportTest();
  fn++;
}

// frame();
// setInterval(frame, 50)
