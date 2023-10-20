const lib = require("render_mod");

let cube = new lib.object("cube", [0,0,0]/*pos*/, [0,0,0]/*rot*/, [2, 2, 2]/*scale*/);
let camera = {"fl":55, "pos":[7,-7,5], "rot":[64,0,47]};
let viewport = {"width":process.stdout.columns, "height":process.stdout.rows-1};

//console.log(`Columns: ${process.stdout.columns}, Rows: ${process.stdout.rows}`);

let i=0;
while (i<viewport.height) {
	if (i==0){
		let a = lib.repeatStringNumTimes("0", viewport.width);
		console.log(a);
	}else {
		console.log("0");
	}
	i++;
}

while (true){
	frame();
}

function frame() {
	viewport.width = process.stdout.columns;
	viewport.height = process.stdout.rows;
}