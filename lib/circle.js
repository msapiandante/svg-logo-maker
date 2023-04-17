module.exports = Circle; 
//created class for circle shape using shapeSelect from generateLogo variable in index.js
class Circle {
    constructor(shapeSelect) {
        this.shapeSelect = shapeSelect;
    }
};
//wrote this code block to attempt to render new circle shape for testing. 
const newCircle = new Circle(shapeSelect).render() 
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <circle cx="25" cy="75" r="20" fill="blue" />

        </svg>`;

