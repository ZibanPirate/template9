const inquirer = require("inquirer");
const questions = require("../config");

const askQuestions = async () => {
  const answers = await inquirer.prompt([questions.addConfigQuestions[0]]);
  if (answers.level === "entry level" && questions.addConfigQuestions[1].choices.length > 0) {
    answers.entry = (await inquirer.prompt([questions.addConfigQuestions[1]])).entry;
  }
  answers.name = (await inquirer.prompt([questions.addConfigQuestions[2]])).name;
  if (answers.level !== "fullstack level") {
    answers.extension = (await inquirer.prompt([questions.addConfigQuestions[3]])).extension;
  }
  return answers;
};

module.exports = async () => {
  const answers = await askQuestions();
  console.log("your answers are: ", answers);
};
