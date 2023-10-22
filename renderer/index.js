const lib = require("text-renderer");

function caliblrateViewportDimensions(camera, d, cubeSize) {
  const focalLength = camera.fl;
  const viewportHeight = 2 * cubeSize;
  const viewportWidth = (viewportHeight * d) / focalLength;

  return { width: viewportWidth, height: viewportHeight };
}

let f = 0;
let camera = new lib.camera(55, 10, [7,-7,5], [64,0,47]);
let viewport = new lib.viewport(process.stdout.columns, process.stdout.rows-1);

let cubeMesh = new lib.mesh([[1,1,1], [-1,1,1], [-1,-1,1], [1,-1,1], [1,-1,-1], [1,1,-1], [-1,-1,-1], [-1,1,-1]], [1,]);
let cube = new lib.item(cubeMesh, [0,0,0]/*pos*/, [0,0,0]/*rot*/, [2, 2, 2]/*scale*/);

//console.log(`Columns: ${process.stdout.columns}, Rows: ${process.stdout.rows}`);

function viewportTest() {
	let i=0;
	while (i<viewport.height) {
		if (i==0){
			let a = lib.repeatStringNumTimes("0", (viewport.width-(f.toString().length + 2)));
			console.log(`${a}f=${f}`);
		}else {
			console.log("0");
		}
		i++;
	}
};

function frame() {
	viewportTest();
	fn++;
}

console.log(`Here is the viewport width at the cube: ${calculateViewportWidth(camera, 11)}`)

//frame();
//setInterval(frame, 50)