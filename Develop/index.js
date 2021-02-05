// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions =
[
  {
    type: 'input',
    name: 'title',
    message: 'What is your github username?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your github username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is your Email address?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your email address!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your project title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project (Required)',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a description of your project!');
          return false;
        }
      }   
    },
  {
    type: 'input',
    name: 'license',
    message: 'What license should your project have?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a license!');
          return false;
        }
    }   
  },
  {
    type: 'input',
    name: 'dependencies',
    message: 'What command is needed to install dependencies?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a command!');
          return false;
        }
    }   
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What command is needed to run tests?',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter a command!');
          return false;
        }
    }   
  },
  {
    type: 'input',
    name: 'repo-info',
    message: 'Please enter information on how user can use the repo.',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter information for the user!');
          return false;
        }
    }   
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please enter information on how user can contribute the repo.',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter contribution information!');
          return false;
        }
    }   
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README