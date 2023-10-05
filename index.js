// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },

    {
        type: "input",
        name: "Description",
        message: "Provide a Description of your project:"
    },

    {
        type: "input",
        name: "Installation",
        message: "Provide installation instructions of your project:"
    },

    {
        type: "input",
        name: "Usage",
        message: "Provide Usage information:"
    },

    {
        type: "input",
        name: "contribution",
        message: "Provide contribution guidelines:"
    },

    {
        type: "list",
        name: "license",
        message: "choose a license for your project:",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "None"]
    },

    {
        type: "input",
        name: "tests",
        message: "Provide test instructions:"
    },

    {
        type: "input",
        name: "Questions",
        message: "What is your Github username:"
    },

    {
        type: "input",
        name: "Questions2",
        message: "What is your email address:"
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            console.error(err);
        } else {
            console.log(`${fileName} created successfully!`);
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) =>{
        const readmeContent = generateMarkdown(answers);

        writeToFile("README.md", readmeContent);
    })
    .catch((error) =>{
        console.error(error);
    });
}

// Function call to initialize app
init();
