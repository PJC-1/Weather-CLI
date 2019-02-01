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

const getTemp = async (zip) => {
	try {
		const response = await got('https://samples.openweathermap.org/data/2.5/weather?zip='+zip+',us&appid=20138f1ff6940565e65b106fbfd2498');
		console.log(response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
};

const run = async () => {
  // show script introduction
  init();
  // ask questions
  const answers = await askQuestions();
  const { ZIPCODE } = answers;
  // make the request
  getTemp(ZIPCODE);
  // show temp
};

run();
