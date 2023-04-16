const jest = require('jest');
const inquirer = require('inquirer');
const fs = require('fs');

const generateLogo = ({ characterSelect, textColor, shapeSelect, shapeColor}) =>
`${characterSelect}

${textColor}

${shapeSelect}

${shapeColor}
`;

const questions = [
  {
    type: 'input',
    name: 'characterSelect',
    message: 'Please enter 3 characters for the logo', 
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Please enter color name or hexadecimal color code for text color.'

  },
  {
    type: 'input',
    name: 'shapeSelect',
    message: 'Please select shape',
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter color name or hexadecimal color doce for shape color.',

  },
];

  inquirer.prompt(questions)
  .then((answers) => {
  const svgInfo = generateLogo(answers);

 fs.writeFile('logo.svg', svgInfo, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg')
    );
  }); 
