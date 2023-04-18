const Circle = require('../circle.js');

describe('Circle', () => {
  test('should render shape', () => {
    const expectedShape = [
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <circle cx="25" cy="75" r="20" fill="blue" />

        </svg>`;
    ].join('');
    const newCircle = new Circle();
    expect(Circle.render()).toEqual(expectedShape);
  });
});