const constants = require("../../config/constants");
const inquirer = require("inquirer");
const questions = require("../../config/questions");
const t9config = require("../../config/t9config");

const askQuestions = async () => {
  const answers = await inquirer.prompt([questions.addLazyOperationQuestions[0]]);
  answers.scene = (await inquirer.prompt([{
    ...questions.addLazyOperationQuestions[1],
    choices: [constants.root, ...t9config.scenes.filter((scene) => {
      return (scene.substring(0, answers.entry.length + 1) === answers.entry + "/");
    })]
  }])).scene;
  answers.name = (await inquirer.prompt([questions.addLazyOperationQuestions[2]])).name;
  answers.url = (await inquirer.prompt([questions.addLazyOperationQuestions[3]])).url;
  answers.exact = (await inquirer.prompt([questions.addLazyOperationQuestions[4]])).exact;
  answers.repeatable = (await inquirer.prompt([questions.addLazyOperationQuestions[5]])).repeatable;
  if ((answers.actionsGroup = (await inquirer.prompt([{
    ...questions.addLazyOperationQuestions[6],
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
    answers.actionsGroup = (await inquirer.prompt([questions.addLazyOperationQuestions[7]])).newActionsGroup;
  }

  answers.actions = [];
  let actionName;
  console.log("add actions to the lazy operation");
  console.log("enter an empty action name when done");
  let actionIndex = 1;
  while ((actionName = (await inquirer.prompt([{ ...questions.addLazyOperationQuestions[8], message: actionIndex + "# " + questions.addLazyOperationQuestions[8].message }])).actionName)) {
    answers.actions.push({ name: actionName });
    actionIndex++;
  }

  return answers;
};

module.exports = async () => {
  const answers = await askQuestions();
  console.log("your answers are: ", answers);
};
