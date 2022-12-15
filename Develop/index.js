// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require('./utils/generateMarkdown.js');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install the project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is the application used?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the guidelines for making contributions?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please enter instructions for testing',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the correct license:',
        choices: ['MIT', 'Apache', 'Mozilla', 'GNU', 'None'],
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
        console.log('Information has now been added to the README!')
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
