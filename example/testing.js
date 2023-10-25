/* Testing that I did whilst starting to make this (basically useless)
let degrees = 70;
console.log(`deg: ${degrees}`);
let radians = degrees*(Math.PI/180);
console.log(`rad: ${radians}`);
let tangent = Math.tan(radians);
console.log(`tan: ${tangent}`);
console.log(`calc: y=${tangent}x`);
*/
/**
 * A function for checking if a point is in a polygon
 *
 * @param {number} x - The x of the point
 * @param {number} y - The y of the point
 * @param {Array<Array<number>>} polygon - The polygon we will check for the
 * point
 * @return {boolean} - Returns whether the point is inside the given polygon
 */
function isPointInPolygon(x, y, polygon) {
  // I know this only works for the square but if you are working on issue
  // ticket #2 do not try to fix this unless it is what is causing the issue
  if (x >= polygon[0][0] && x <= polygon[1][0] &&
     y >= polygon[0][1] && y <= polygon[2][1]) {
    return true;
  } else {
    return false;
  }
}

// The field of view of the viewport (in degrees)
const fov = 70;
// Square is formatted like this [[point], [point]]
const square = [[-0.25, 4], [0.25, 4], [-0.25, 6], [0.25, 6]];
let y = 0;
// Max distance is set to low so it does not fill up the command prompt
const maxDistance = 10;
// Gets the dimentions of the viewport
const viewport = {'height': process.stdout.rows-1,
  'width': process.stdout.columns};
console.log(viewport);
let castAngle = 0;
// The current column that we are on
let column = 0;
// Columns where we have hit an object
let columnHits = [];
while (castAngle<=degrees) {
  // Calculate the exact angle that we need to cast at
  castAngle = ((viewport.width/(fov*2))*column)-70;
  // Convert the angle to a gradient for y=mx+c
  const castTang = Math.tan(castAngle*(Math.PI/180));
  while (y<maxDistance) {
    // Move the cursor for the raycast away from the camera
    y += 0.01;
    // Calculate x using y=mx+c(ish), Maybe I've got this wrong?
    const x = castTang*y;
    // Test if the current "raycast cursor" is inside/on the edge of an object
    if (isPointInPolygon(x, y, square)) {
      // Exit the loop (the 1000 is for assurance)
      y=maxDistance+1000;
      // Add the current column to the list of columns that have hit an object
      columnHits += column;
    }
  };
  // Reset y
  y=0;
  // Move to the next column
  column++;
};

// Initialise the output variable
let output = '';
for (i=0; i<=(viewport.width-1); i++) {
  // Check if the current column is listed in the columns that have hit an
  // object
  if (columnHits.includes(i)) {
    output += '#';
  } else {
    output += '.';
  }
}
console.log(output);
