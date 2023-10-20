const lib = require("render_mod");

let cube = new lib.object("cube", [0,0,0]/*pos*/, [0,0,0]/*rot*/, [2, 2, 2]/*scale*/);
let fn = 0;
let camera = {"fl":55, "pos":[7,-7,5], "rot":[64,0,47]};
let viewport = {"width":process.stdout.columns, "height":process.stdout.rows-1};

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

setInterval(frame, 50)