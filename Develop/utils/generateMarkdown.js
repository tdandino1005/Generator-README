// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None') {
    return ` [![License: MIT](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None') {
    return `* [License](#license)`;
  }
    return '';

}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None') {
    return `* [License](#license)`;
  }
    return '';

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Licensing: 
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  


  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage Information](#usage-information)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Additional Information](#additional-info)

  ## Description
  ${data.description}

  ## Installation 
  ${data.installation}

  ## Usage Information
  ${data.usage}

  ## Contribution
  ${data.contributing}

  ## Testing
  ${data.testing}


  ## Additional Information:
  Email: ${data.email}
  Github: [${data.gitHubUser}](https://github.com/${data.gitHubUser})`;
}

module.exports = generateMarkdown;