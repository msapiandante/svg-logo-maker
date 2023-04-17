module.exports = Square
//created class for square shape using shapeSelect from generateLogo variable in my index.js
class Square {
    constructor(shapeSelect) {
        this.shapeSelect = shapeSelect;
    }
}
//wrote this code block to attempt to render new square shape for testing. 
const newSquare = new Square(shapeSelect).render() 
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect <rect x="0" y="0" width="30" height="30" fill="blue" /></svg>`;
  