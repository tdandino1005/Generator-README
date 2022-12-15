// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');


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
        name: 'installation',
        message: 'How do you install the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is the application used?',
    },
    {
        type: 'input',
        name: 'contrubuting',
        message: 'What are the guidelines for contributing?',
    },
    {
        type: 'input',
        name: 'instruction',
        message: 'Please enter instructions for testing',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the correct license.',
        choices: ['MIT', 'Apache2.0', 'GPL3.0', 'BSD3', 'None'],
    },
    {
        type: 'input',
        name: 'gitHubUser',
        message: 'Please enter your GitHub UserName',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Information has been added to the README!')
    });
};
// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};


// Function call to initialize app
init();
