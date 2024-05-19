const lib = require("textvox3d");

const f = 0;
const camera = new lib.Camera(55, 10, [7, -7, 5], [64, 0, 47]);
const viewport = new lib.Viewport(
  process.stdout.columns,
  process.stdout.rows - 1,
);

const cubeMesh = lib.getMesh("cube");
const cube = new lib.GameObject(cubeMesh, [0, 0, 0], [0, 0, 0], [2, 2, 2]);

// We will do just horizontal first
console.log(`The camera fov is :${camera.fov}`);