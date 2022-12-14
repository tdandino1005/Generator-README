// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return ` [![License: MIT](https://img.shields.io/badge/License-${license}-yellow.svg)`;
  }
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`;
  }
    return '';

}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`;
  }
    return '';

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage Information](#usage-information)
  - [Contribution](#contribution)
  - [Testing](#testing)
  ${renderLicenseLink(data.license)}
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation 
  ${data.installation}

  ## Usage Information
  ${data.usageInformation}

  ## Contribution
  ${data.contribution}

  ## Testing
  ${data.testing}
  ${renderLicenseSection(data.license)}

  ## Questions
  For any questions please feel free to email me: ${data.emailAddress}
  Attached my github info for any future use: [${data.gitHubUserName}](https://github.com/${data.gitHubUserName})`;
}


module.exports = generateMarkdown;