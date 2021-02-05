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
  
  return `[![License](${renderLicenseBadge})](${renderLicenseLink})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
#asdfasdfas
  *asdfasdf`;
}

module.exports = generateMarkdown;
