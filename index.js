const jest = require('jest');
const inquirer = require('inquirer');
const fs = require('fs');

const generateLogo = ({ characterSelect, textColor, shapeSelect, shapeColor}) =>
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

<${shapeSelect} cx="150" cy="100" r="80" fill="${shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${characterSelect}</text>

</svg>
`;

const questions = [
  {
    type: 'input',
    name: 'characterSelect',
    message: 'Please enter up to 3 characters for the logo', 
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Please enter color name or hexadecimal color code for text color.'

  },
  {
    type: 'list-input',
    name: 'shapeSelect',
    message: 'Please select from the following list: circle, triangle, or square',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter color name or hexadecimal color code for shape color.',

  },
];

  inquirer.prompt(questions)
  .then((answers) => {
  const svgInfo = generateLogo(answers);

 fs.writeFile('logo.svg', svgInfo, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg')
    );
  }); 
