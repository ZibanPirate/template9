const constants = require("../../config/constants");
const inquirer = require("inquirer");
const questions = require("../../config/questions");
const t9config = require("../../config/t9config");

const askQuestions = async () => {
  const answers = await inquirer.prompt([questions.addSceneQuestions[0]]);
  answers.scene = (await inquirer.prompt([{
    ...questions.addSceneQuestions[1],
    choices: [constants.root, ...t9config.scenes.filter((scene) => {
      return (scene.substring(0, answers.entry.length + 1) === answers.entry + "/");
    })]
  }])).scene;
  answers.name = (await inquirer.prompt([questions.addSceneQuestions[2]])).name;
  answers.url = (await inquirer.prompt([questions.addSceneQuestions[3]])).url;
  answers.exact = (await inquirer.prompt([questions.addSceneQuestions[4]])).exact;

  answers.properties = [];
  let name, type, nullable, undefinable, initialValue;
  console.log("add properties to the scene");
  console.log("enter an empty property name when done");
  let index = 1;
  while ((name = (await inquirer.prompt([{ ...questions.addSceneQuestions[5], message: index + "# " + questions.addSceneQuestions[5].message }])).propertyName)) {
    type = (await inquirer.prompt([questions.addSceneQuestions[6]])).propertyType;
    if (type === "custom") {
      type = (await inquirer.prompt([questions.addSceneQuestions[7]])).customPropertyType;
    }
    nullable = (await inquirer.prompt([questions.addSceneQuestions[8]])).propertyNullable;
    undefinable = (await inquirer.prompt([questions.addSceneQuestions[9]])).propertyUndefinable;
    initialValue = (await inquirer.prompt([questions.addSceneQuestions[10]])).propertyInitialValue;
    answers.properties.push({ name, type, nullable, undefinable, initialValue });
    index++;
  }

  if ((answers.lazyOperation = (await inquirer.prompt([questions.addSceneQuestions[11]])).lazyOperation)) {
    answers.operationName = (await inquirer.prompt([questions.addSceneQuestions[12]])).operationName;
    answers.operationRepeatable = (await inquirer.prompt([questions.addSceneQuestions[13]])).operationRepeatable;
    if ((answers.actionsGroup = (await inquirer.prompt([{
      ...questions.addSceneQuestions[14],
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
      answers.actionsGroup = (await inquirer.prompt([questions.addSceneQuestions[15]])).newActionsGroup;
    }

    answers.actions = [];
    let actionName;
    console.log("add actions to the lazy operation");
    console.log("enter an empty action name when done");
    let actionIndex = 1;
    while ((actionName = (await inquirer.prompt([{ ...questions.addSceneQuestions[16], message: actionIndex + "# " + questions.addSceneQuestions[16].message }])).actionName)) {
      answers.actions.push({ name: actionName });
      actionIndex++;
    }

  }
  return answers;
};

module.exports = async () => {
  const answers = await askQuestions();
  console.log("your answers are: ", answers);
};
