const lib = require("text-renderer");

function calculateViewportWidth(camera, d) {
	const focalLength = camera.fl;
	const viewportHeight = camera.viewportHeight;
  
	// Calculate the width of the viewport
	const viewportWidth = (viewportHeight * d) / focalLength;
  
	return viewportWidth;
}

let fn = 0;
let camera = new lib.camera(55, [7,-7,5], [64,0,47]);
let viewport = new lib.viewport(process.stdout.columns, process.stdout.rows-1);

let cube = new lib.item("cube", [0,0,0]/*pos*/, [0,0,0]/*rot*/, [2, 2, 2]/*scale*/);

//Whole screen width is focal length in meters
//Pixel size is 
let pixelSize = 50;

//console.log(`Columns: ${process.stdout.columns}, Rows: ${process.stdout.rows}`);

function viewportTest() {
	let i=0;
	while (i<viewport.height) {
		if (i==0){
			let a = lib.repeatStringNumTimes("0", (viewport.width-(fn.toString().length + 2)));
			console.log(`${a}f=${fn}`);
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

console.log(`Here is the viewport width of the viewport at the cube: ${calculateViewportWidth(camera.fl, 11)}`)

//frame();
//setInterval(frame, 50)