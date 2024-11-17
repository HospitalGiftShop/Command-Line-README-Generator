// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";


// TODO: Create an array of questions for user input
const questions = ['What is your Project Title?', 'What was your motivation?', 'Why did you build this project?', 'What problem does it solve?', 'What did you learn?',
    'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.', 'Provide instructions and examples for use.',
    'Select the type of license you would like for your project:', 'How can others contribute to the project?', 'What are the Test Instructions?',
    'What is your email address?', 'What is your GitHub profile?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("Your README file has been created.")
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            message: questions[0],
            name: "title",
        },
        {
            type: "input",
            message: questions[1],
            name: "motivation",
        },
        {
            type: "input",
            message: questions[2],
            name: "build",
        },
        {
            type: "input",
            message: questions[3],
            name: "problem",
        },
        {
            type: "input",
            message: questions[4],
            name: "learn",
        },
        {
            type: "input",
            message: questions[5],
            name: "installation",
        },
        {
            type: "input",
            message: questions[6],
            name: "usage",
        },
        {
            type: "list",
            message: questions[7],
            choices: [
                "MIT",
                "Apache 2.0 License",
                "GNU General Public License 3.0",
                "Mozilla Public License 2.0",
                "Unlicensed",
            ],
            name: "license",

        },
        {
            type: "input",
            message: questions[8],
            name: "contribution",
        },
        {
            type: "input",
            message: questions[9],
            name: "tests",
        },
        {
            type: "input",
            message: questions[10],
            name: "email",
        },
        {
            type: "input",
            message: questions[11],
            name: "github",
        }
    ])
        .then((data) =>
            writeToFile('README.md', generateMarkdown(data)))
};
// Function call to initialize app
console.log('Welcome to the README Generator');
init();
