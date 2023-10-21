exports.repeatStringNumTimes = function repeatStringNumTimes(string, times) {
    var repeatedString = "";
    while (times > 0) {
      repeatedString += string;
      times--;
    }
    return repeatedString;
};
exports.mesh = class mesh {
    constructor(points, edges, faces) {
        this.points = points;
        this.edges = edges;
        this.faces = faces;
    }
}
exports.item = class item {
	constructor(mesh, pos, rot) {
		this.mesh = mesh;
        this.pos = pos;
        this.rot = rot;
	}
};
exports.camera = class camera {
	constructor(fl, viewPortHeight, pos, rot) {
		this.fl = fl;
        this.viewportHeight = viewportHeight;
        this.pos = pos;
        this.rot = rot;
	}
};
exports.viewport = class viewport {
	constructor(width, height) {
		this.width = width;
        this.height = height;
	}
};