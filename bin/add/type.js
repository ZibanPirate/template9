const inquirer = require("inquirer");
const questions = require("../../config");

const askQuestions = async () => {
  const answers = await inquirer.prompt([questions.addTypeQuestions[0]]);
  if (answers.level === "entry level" && questions.addTypeQuestions[1].choices.length > 0) {
    answers.entry = (await inquirer.prompt([questions.addTypeQuestions[1]])).entry;
  }
  answers.name = (await inquirer.prompt([questions.addTypeQuestions[2]])).name;
  answers.properties = [];
  let name, type, required;
  console.log("add properties to the type");
  console.log("enter an empty property name when done");
  let i = 1;
  while ((name = (await inquirer.prompt([{ ...questions.addTypeQuestions[3], message: i + "# " + questions.addTypeQuestions[3].message }])).propertyName)) {
    type = (await inquirer.prompt([questions.addTypeQuestions[4]])).propertyType;
    if (type === "custom") {
      type = (await inquirer.prompt([questions.addTypeQuestions[5]])).customPropertyType;
    }
    required = (await inquirer.prompt([questions.addTypeQuestions[6]])).propertyRequired;
    answers.properties.push({ name, type, required });
    i++;
  }
  return answers;
};

module.exports = async () => {
  const answers = await askQuestions();
  console.log("your answers are: ", answers);
};
