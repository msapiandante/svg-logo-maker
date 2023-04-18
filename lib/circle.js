module.exports = Circle; 

//importing jest and inquirer 
const jest = require('jest');
const inquirer = require('inquirer');
const generateShape = ({shapeSelect}) =>
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<${shapeSelect} cx="150" cy="100" r="80" fill="blue" />

</svg>
`;

class Circle {
    constructor(generateShape) {
        this.shapeSelect = shapeSelect;
    }
};


//wrote this code block to attempt to render new circle shape for testing. 
const newCircle = new Circle(generateShape).render() 
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
        <circle cx="25" cy="75" r="20" fill="blue" />

        </svg>`;
       
        
        

