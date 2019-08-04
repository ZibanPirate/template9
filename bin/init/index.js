const inquirer = require("inquirer");
const questions = require("../config");

const askQuestions = async () => {
  const answers = await inquirer.prompt(questions.initQuestions);
  if (answers.entry) {
    answers.entry = await inquirer.prompt(questions.entryQuestions);
  }
  return answers;
};

module.exports = async () => {
  const answers = await askQuestions();
  console.log("your answers are: ", answers);
};
