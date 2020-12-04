const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    name: "project_title",
    type: "input",
    message: "What is the name of your project?",
  },
  {
    name: "project_description",
    type: "editor",
    message: "Please Describe your Project",
  },
  {
    name: "installation",
    type: "editor",
    message: "What are the steps required to install your project?",
  },
  {
    name: "usage",
    type: "editor",
    message: "Provide Instructions and examples for using this app.",
  },
  {
    name: "image_url",
    type: "input",
    message: "Please provide a full URL link to an image of your application.",
  },
  {
    name: "image_text",
    type: "input",
    message: "Provide a title for your image.",
  },
  {
    name: "license",
    type: "list",
    message: "Choose a license for your software.",
    choices: ["MIT License", "GNU GPLv3", "No License"],
  },
];

validateInput = (data) => {};

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) throw err;
    console.log(
      "README.md written to generated_readme folder in this directory."
    );
  });
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answer) => generateMarkdown(answer))
    .then((data) => writeToFile("./generated_readme/README.md", data));
}

// function call to initialize program
init();
