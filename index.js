/*when index.js is called in the command line, i am prompted to select 3 characters for text 
THEN I am prompted to select for color keyword or hexadecimal number 
THEN I am prompted to choose a shape from the folllowing list: circle, triangle and square
once shape is selected, I am prompted for shape's color- enter color keyword or hexadecimal number 
when i have entered input for all prompts - output text "Generated logo.svg" is printed in command line AND 
logo.svg file is opened to left. 

logo must be 300 X 200 pixel image that matches criteria input by user. */

// require jest and inquirer 
const jest = require('jest');
const inquirer = require('inquirer');
// the following will probably a some type of loop? 
// prompt for 3 characters for logo text when complete NEXT call 
//prompt for color then next call 
// prompt to select shape from list - circle, triangle or square when complete NEXT call 
// prompt for color then generate file. 

// TODO: Include packages needed for this application


const generateLogo = ({ characterSelect, textColor, shapeSelect, shapeColor}) =>
`# ${characterSelect}

## ${textColor}

## ${shapeSelect}

## ${shapeColor}
`;

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file

  inquirer.prompt(questions)
  .then((answers) => {
  const svgInfo = generateLogo(answers);

  fs.writeFile('logo.svg', svgInfo, (err) =>
    err ? console.log(err) : console.log('Success! Here is your logo.')
    );
  });
