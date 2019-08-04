const inquirer = require("inquirer");
const questions = require("../config");

const askQuestions = () => {
  const answers = await inquirer.prompt(questions.entryQuestions);
  return answers;
};

module.exports = async () => {
  const answers = await askQuestions();
  console.log("your answers are: ", answers);
};
