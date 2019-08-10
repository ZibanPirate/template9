const constants = require("../../config/constants");
const inquirer = require("inquirer");
const questions = require("../../config/questions");
const t9config = require("../../config/t9config");

const askQuestions = async () => {
  const answers = await inquirer.prompt([questions.addActionQuestions[0]]);
  if ((answers.actionsGroup = (await inquirer.prompt([{
    ...questions.addActionQuestions[1],
    choices: [
      constants.root,
      ...new Set(t9config.actions.filter((action) => {
        return (action.substring(0, answers.entry.length + 1) === answers.entry + "/");
      }).map((action) => {
        return action.substring(answers.entry.length + 8, action.lastIndexOf("/"));
      })),
      constants.createNewGroup,
    ]
  }
  ])).actionsGroup) === constants.createNewGroup) {
    answers.actionsGroup = (await inquirer.prompt([questions.addActionQuestions[2]])).newActionsGroup;
  }
  answers.name = (await inquirer.prompt([questions.addActionQuestions[3]])).name;

  answers.parameters = [];
  let name, type, required, defaultValue;
  console.log("add parameters to the action function");
  console.log("enter an empty parameter name when done");
  let index = 1;
  while ((name = (await inquirer.prompt([{ ...questions.addActionQuestions[4], message: index + "# " + questions.addActionQuestions[4].message }])).parameterName)) {
    type = (await inquirer.prompt([questions.addActionQuestions[5]])).parameterType;
    if (type === "custom") {
      type = (await inquirer.prompt([questions.addActionQuestions[6]])).customParameterType;
    }
    required = (await inquirer.prompt([questions.addActionQuestions[7]])).parameterRequired;
    if (!required) {
      defaultValue = (await inquirer.prompt([questions.addActionQuestions[8]])).parameterDefaultValue;
    }
    answers.parameters.push({ name, type, required, defaultValue });
    index++;
  }

  return answers;
};

module.exports = async () => {
  const answers = await askQuestions();
  console.log("your answers are: ", answers);
};
