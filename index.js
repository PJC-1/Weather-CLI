#!/usr/bin/env node
const got = require('got');
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");

const init = () => {
  console.log(
    chalk.green(
      figlet.textSync("weather cli", {
        font: "Ghost",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  );
}

const askQuestions = () => {
  const questions = [
    {
      name: "ZIPCODE",
      type: "input",
      message: "What is the zipcode?"
    }
  ];
  return inquirer.prompt(questions);
};

const run = async () => {
  // show script introduction
  init();
  // ask questions
  const answers = await askQuestions();
  const { ZIPCODE } = answers;
  // make the request
  // show temp
};

run();
