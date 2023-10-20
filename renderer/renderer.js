const lib = require("render_mod");

let cube = new lib.object("cube", [0,0,0], [0,0,0]);
console.log(`Cube : ${cube.pos}`);
let camera = {"fl":55, "pos":[7,-7,5], "rot":[64,0,47]};
let viewport = {"width":50, "height":11
};

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

function frame(camera) {

}