const lib = require('./index');

test('Camera', () => {
  expect(new lib.Camera(70, 10, [7, -7, 5], [64, 0, 47]))
      .toEqual({'fov': 70, 'samples': 10,
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
test('Get Mesh', () => {
  expect(lib.getMesh('cube'))
      .toEqual({'points': [[1, 1, 1], [-1, 1, 1], [-1, -1, 1], [1, -1, 1],
        [1, -1, -1], [1, 1, -1], [-1, -1, -1], [-1, 1, -1]],
      'edges': [[0, 1], [0, 5], [0, 3], [1, 2], [1, 7],
        [2, 3], [2, 6], [3, 4], [4, 5], [4, 6], [5, 7], [7, 6]],
      'faces': [[1, 3, 5, 2], [2, 8, 3, 7],
        [7, 5, 9, 6], [0, 4, 1, 10], [3, 4, 6, 11]]});
});
