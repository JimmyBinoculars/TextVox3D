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
exports.object = class object {
	constructor(mesh, pos, rot) {
		this.mesh = mesh;
        this.pos = pos;
        this.rot = rot;
	}
};