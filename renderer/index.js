const lib = require("text-renderer");

let cube = new lib.item("cube", [0,0,0]/*pos*/, [0,0,0]/*rot*/, [2, 2, 2]/*scale*/);
let f = 0;
let camera = new lib.camera(55, [7,-7,5], [64,0,47]);
let viewport = new lib.viewport(process.stdout.columns, process.stdout.rows-1);

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

setInterval(frame, 50)