const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  { name: "user_name", type: "input", message: "What is your name?" },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("README.md", data, function (err) {
    if (err) throw err;
    console.log("README.md written to folder");
  });
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answer) => generateMarkdown(answer))
    .then((data) => writeToFile("README.md", data));
}

// function call to initialize program
init();
