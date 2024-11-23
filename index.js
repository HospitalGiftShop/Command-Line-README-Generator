// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";


// TODO: Create an array of questions for user input
const questions = ['What is the name of your project?', 'What motivated you to build the project?', 'What problem does the application solve?', 'What did you learn?',
    'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.', 'How do you use the application?',
    'Select the type of license you would like for your project:', 'Did anyone other than yourself contribute to the project?', 'What are the Test Instructions?',
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
            name: "problem",
        },
        {
            type: "input",
            message: questions[3],
            name: "learn",
        },
        {
            type: "input",
            message: questions[4],
            name: "installation",
        },
        {
            type: "input",
            message: questions[5],
            name: "usage",
        },
        {
            type: "list",
            message: questions[6],
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
            message: questions[7],
            name: "contribution",
        },
        {
            type: "input",
            message: questions[8],
            name: "tests",
        },
        {
            type: "input",
            message: questions[9],
            name: "email",
        },
        {
            type: "input",
            message: questions[10],
            name: "github",
        }
    ])
        .then((data) =>
            writeToFile('./README-Sample/README.md', generateMarkdown(data)))
};
// Function call to initialize app
console.log('Welcome to the README Generator');
console.log('You will be prompted with a series of questions.  Hit enter on your keyboard once you are ready to move to the next question.')
init();
