const Square = require('../square.js');

describe('Square', () => {
  test('should render shape', () => {
    const expectedShape = [
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <rect x="0" y="0" width="30" height="30" fill="blue" />

        </svg>`;
    ].join('');
    const newSquare = new Square();
    expect(Square.render()).toEqual(expectedShape);
  });
});