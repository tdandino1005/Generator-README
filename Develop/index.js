// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter your project title',
    },
    {
        type: 'input',
        name: 'decription',
        message: 'How would you describe your project?',
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'How do you install the project',
    },
    {
        name: 'usageInformation',
        type: 'input',
        message: 'How is your application used?',
    },
    {
        name: 'contributionGuidelines',
        type: 'input',
        message: 'What are the guidelines for contributing?',
    },
    {
        name: 'testInstructions',
        type: 'input',
        message: 'Please enter any necessary information for testing.',
    },
    {
        name: 'license',
        type: 'list',
        message: 'Please select the appropriate license.',
        choices: ['MIT', 'Apache2.0', 'GPL3.0', 'BSD3', 'None'],
    },
    {
        name: 'gitHubUserName',
        type: 'input',
        message: 'Please enter your GitHub UserName',
    },
    {
        name: 'emailAddress',
        type: 'input',
        message: 'Please enter your email address',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
