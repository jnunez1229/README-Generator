// TODO: Include packages needed for this application
const { rejects } = require('assert');
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions =
[
  {
    type: 'input',
    name: 'name',
    message: 'What is your first and last name?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your first and last name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'username',
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
    name: 'email',
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
    message: 'Provide a description of the project.',
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
    name: 'installation',
    message: 'Please enter command that installs project dependencies',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter install command!');
          return false;
        }
    }   
  },
  {
    type: 'input',
    name: 'deployedSite',
    message: 'Provide a link to the deployed site.',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your deployed link');
          return false;
        }
    }   
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license should your project have?',
    choices:['MIT', 'Apache 2.0', 'CC0']  
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Please enter information on how the user can contribute the repo.',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter contribution information!');
          return false;
        }
    }   
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please enter command that runs test on project',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter install command!');
          return false;
        }
    }   
  },
  {
    type: 'input',
    name: 'userInfo',
    message: 'Please enter information on how user can use the repo.',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter information for the user!');
          return false;
        }
    }   
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 
  fs.writeFile(fileName, data, err => {
    // if there's an error, reject promise and send error to .catch method
    if(err){
      throw err;
      // return out of the function to keep from resolving
      return;
    }

    // If all good, resolve and send to .this method
    console.log('README created!')
  });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(readMeData => {
  return generateMarkdown(readMeData);
})
.then(readMeData => {
  return writeToFile(`README.md`, readMeData)
})
.catch(err => {
  console.log(err);
});

