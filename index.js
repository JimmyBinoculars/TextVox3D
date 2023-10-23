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
	constructor(fl, viewportHeight, pos, rot) {
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
exports.getMesh = function getMesh(meshName) {
    switch(meshName) {
        case "cube" :
            return {"points":[[1,1,1], [-1,1,1], [-1,-1,1], [1,-1,1], [1,-1,-1], [1,1,-1], [-1,-1,-1], [-1,1,-1]], "edges":[[0,1], [0,5], [0,3], [1,2], [1,7], [2,3], [2,6], [3,4], [4,5], [4,6], [5,7], [7,6]], "faces":[[1,3,5,2], [2,8,3,7], [7,5,9,6], [0,4,1,10], [3,4,6,11]]};
    }
}