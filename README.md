# svg-logo-maker


GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

when index.js is called in the command line, i am prompted to select 3 characters for text 
THEN I am prompted to select for color keyword or hexadecimal number 
THEN I am prompted to choose a shape from the folllowing list: circle, triangle and square
once shape is selected, I am prompted for shape's color- enter color keyword or hexadecimal number 
when i have entered input for all prompts - output text "Generated logo.svg" is printed in command line AND 
logo.svg file is opened to left. 

logo must be 300 X 200 pixel image that matches criteria input by user. 

/*when index.js is called in the command line, i am prompted to select 3 characters for text 
THEN I am prompted to select for color keyword or hexadecimal number 
THEN I am prompted to choose a shape from the folllowing list: circle, triangle and square
once shape is selected, I am prompted for shape's color- enter color keyword or hexadecimal number 
when i have entered input for all prompts - output text "Generated logo.svg" is printed in command line AND 
logo.svg file is opened to left. 

logo must be 300 X 200 pixel image that matches criteria input by user. */

// require jest and inquirer 
// the following will probably a some type of loop? 
// prompt for 3 characters for logo text when complete NEXT call 
//prompt for color then next call 
// prompt to select shape from list - circle, triangle or square when complete NEXT call 
// prompt for color then generate file. 