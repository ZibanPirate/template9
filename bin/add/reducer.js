const constants = require("../../config/constants");
const inquirer = require("inquirer");
const questions = require("../../config/questions");
const t9config = require("../../config/t9config");

const askQuestions = async () => {
  const answers = await inquirer.prompt([questions.addReducerQuestions[0]]);
  answers.reducer = (await inquirer.prompt([{
    ...questions.addReducerQuestions[1],
    choices: [constants.root, ...t9config.reducers.filter((reducer) => {
      return (reducer.substring(0, answers.entry.length + 1) === answers.entry + "/");
    }).map((reducer) => {
      return reducer.substring(answers.entry.length + 8);
    })]
  }])).reducer;
  answers.name = (await inquirer.prompt([questions.addReducerQuestions[2]])).name;

  answers.state = [];
  let name, type, nullable, undefinable, initialValue;
  console.log("fill the properties of the state object of the reducer");
  console.log("enter an empty property name when done");
  let stateIndex = 1;
  while ((name = (await inquirer.prompt([{ ...questions.addReducerQuestions[3], message: stateIndex + "# " + questions.addReducerQuestions[3].message }])).propertyName)) {
    type = (await inquirer.prompt([questions.addReducerQuestions[4]])).propertyType;
    if (type === "custom") {
      type = (await inquirer.prompt([questions.addReducerQuestions[5]])).customPropertyType;
    }
    nullable = (await inquirer.prompt([questions.addReducerQuestions[6]])).propertyNullable;
    undefinable = (await inquirer.prompt([questions.addReducerQuestions[7]])).propertyUndefinable;
    initialValue = (await inquirer.prompt([questions.addReducerQuestions[8]])).propertyInitialValue;
    answers.state.push({ name, type, nullable, undefinable, initialValue });
    stateIndex++;
  }

  return answers;
};

module.exports = async () => {
  const answers = await askQuestions();
  console.log("your answers are: ", answers);
};
