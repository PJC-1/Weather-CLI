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
        font: "Standard",
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
		const response = await got('https://api.openweathermap.org/data/2.5/weather?zip='+zip+',us&units=metric&appid=d800995b290947ec055fc167776c2447');
    const x = JSON.parse(response.body);
    console.log(x.main.temp + ' °C');

	} catch (error) {
		console.log(error.response.body);
	}
};

const run = async () => {
  // show script introduction
  init();
  // ask question
  const answers = await askQuestions();
  const { ZIPCODE } = answers;
  // make the request
  getTemp(ZIPCODE);
  // show temp

};

run();
