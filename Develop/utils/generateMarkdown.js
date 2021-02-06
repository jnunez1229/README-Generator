// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return '';
  }else if(license === 'MIT'){
    return `https://img.shields.io/badge/License-MIT-yellow.svg`
  }else if(license === 'Apache 2.0'){
    return `https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  }else if(license === 'CC0') {
    return `https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg`
  }
}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license){
    return '';
  }else if(license === 'MIT'){
    return `https://opensource.org/licenses/MIT`

  }else if(license === 'Apache 2.0'){
    return `https://opensource.org/licenses/Apache-2.0`

  }else if(license === 'CC0'){
    return `http://creativecommons.org/publicdomain/zero/1.0/`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license){
    return '';
  }
  
  return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {username, email, title, description, installation, deployedSite, license, contribution, tests, userInfo} = data
  return `# ${title}
## Description
${description}
## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Licence](#licence)
    * [Contribution](#contribution)
    * [Tests](#tests)
    * [Questions](#questions)
## Installation
${installation}
## Usage
${userInfo}
[Click to to view the deployed website](${deployedSite})
## License
${renderLicenseSection(license)}
## Contribution
${contribution}
## Tests
${tests}
## Questions

[Click to visit my Github page](https://www.github.com/${username})

[Have more questions? Shoot me an email!](mailto:${email})
`;
}

module.exports = generateMarkdown;
