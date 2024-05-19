const lib = require('./index');

test('Camera', () => {
  expect(new lib.Camera(55, 10, [7, -7, 5], [64, 0, 47]))
      .toEqual({'fl': 55,'fov': 3.0555555555555554, 'samples': 10,
        'pos': [7, -7, 5], 'rot': [64, 0, 47]});
});
test('Mesh', () => {
  expect(new lib.Mesh([1, 1, 1], [1, 1, 1], [1, 1, 1]))
      .toEqual({'points': [1, 1, 1], 'edges': [1, 1, 1], 'faces': [1, 1, 1]});
});
test('Item', () => {
  expect(new lib.GameObject('cube', [1, 1, 1], [0, 0, 0]))
      .toEqual({'mesh': 'cube', 'pos': [1, 1, 1], 'rot': [0, 0, 0]});
});
test('Viewport', () => {
  expect(new lib.Viewport(100, 100)).toEqual({'width': 100, 'height': 100});
});
test('Repeat string func', () => {
  expect(lib.repeatStringNumTimes('a', 3)).toEqual('aaa');
});
