let degrees = 70;
console.log(`deg: ${degrees}`);
let radians = degrees*(Math.PI/180);
console.log(`rad: ${radians}`);
let tangent = Math.tan(radians);
console.log(`tan: ${tangent}`);
console.log(`calc: y=${tangent}x`);
/*
function isPointInPolygon(point, polygon) {
    const x = point[0];
    const y = point[1];
    let isInside = false;

    for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
        const xi = polygon[i][0];
        const yi = polygon[i][1];
        const xj = polygon[j][0];
        const yj = polygon[j][1];

        const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
        if (intersect) {
            isInside = !isInside;
        }
    }

    return isInside;
};*/

function isPointInPolygon(x, y, polygon) {
    if (x >= polygon[0][0] && x <= polygon[1][0] && y >= polygon[0][1] && y <= polygon[2][1]) {
        return true;
    }else {
        return false;
    }
}

let square = [[-0.25,4], [0.25, 4], [-0.25,6], [0.25,6]];
let y = 0;
let maxDistance = 10;
let viewport = {"height":process.stdout.rows-1, "width":process.stdout.columns};
console.log(viewport);
let castAngle = 0;
let column = 0;
let columnHits = [];
while(castAngle<=degrees) {
    castAngle = ((viewport.width/(140))*column)-70;
    let castTang = Math.tan(castAngle*(Math.PI/180));
    //console.log(`Cast angle: ${castAngle}, tang: ${castTang}`);
    while(y<maxDistance){
        y += 0.01;
        let x = castTang*y;
        if(isPointInPolygon(x, y, square)){
            y=maxDistance+1000;
            columnHits += column;
        }
    };
    y=0;
    column++;
};
let output = "";
for(i=0;i<=(viewport.width-1);i++){
    if(columnHits.includes(i)){
        output += "#";
    }else {
        output += ".";
    }
}
console.log(output);