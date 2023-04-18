const Triangle = require('../triangle.js');

describe('Triangle', () => {
    test('should render shape', () => {
        const expectedShape = [
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <polygon points="200,10 250,190 160,210" fill="blue" />

        </svg>`;
    ].join('');
        const newTriangle = new Triangle();
        expect(Triangle.render()).toEqual(expectedShape);
    });
});