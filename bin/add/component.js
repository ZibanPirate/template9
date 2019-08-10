const constants = require("../../config/constants");
const inquirer = require("inquirer");
const questions = require("../../config/questions");
const t9config = require("../../config/t9config");

const askQuestions = async () => {
  const answers = await inquirer.prompt([questions.addComponentQuestions[0]]);
  answers.scene = (await inquirer.prompt([{
    ...questions.addComponentQuestions[1],
    choices: [constants.root, ...t9config.scenes.filter((scene) => {
      return (scene.substring(0, answers.entry.length + 1) === answers.entry + "/");
    })]
  }])).scene;
  answers.name = (await inquirer.prompt([questions.addComponentQuestions[2]])).name;
  answers.stateless = (await inquirer.prompt([questions.addComponentQuestions[3]])).stateless;

  answers.properties = [];
  let name, type, nullable, undefinable;
  console.log("add properties to the component");
  console.log("enter an empty property name when done");
  let index = 1;
  while ((name = (await inquirer.prompt([{ ...questions.addComponentQuestions[4], message: index + "# " + questions.addComponentQuestions[4].message }])).propertyName)) {
    type = (await inquirer.prompt([questions.addComponentQuestions[5]])).propertyType;
    if (type === "custom") {
      type = (await inquirer.prompt([questions.addComponentQuestions[6]])).customPropertyType;
    }
    nullable = (await inquirer.prompt([questions.addComponentQuestions[7]])).propertyNullable;
    undefinable = (await inquirer.prompt([questions.addComponentQuestions[8]])).propertyUndefinable;
    answers.properties.push({ name, type, nullable, undefinable });
    index++;
  }
  answers.state = [];
  if (!answers.stateless) {
    let name, type, nullable, undefinable, initialValue;
    console.log("fill the properties of the state object of the component");
    console.log("enter an empty property name when done");
    let StateIndex = 1;
    while ((name = (await inquirer.prompt([{ ...questions.addComponentQuestions[9], message: StateIndex + "# " + questions.addComponentQuestions[9].message }])).sPropertyName)) {
      type = (await inquirer.prompt([questions.addComponentQuestions[10]])).sPropertyType;
      if (type === "custom") {
        type = (await inquirer.prompt([questions.addComponentQuestions[11]])).customSPropertyType;
      }
      nullable = (await inquirer.prompt([questions.addComponentQuestions[12]])).sPropertyNullable;
      undefinable = (await inquirer.prompt([questions.addComponentQuestions[13]])).sPropertyUndefinable;
      initialValue = (await inquirer.prompt([questions.addComponentQuestions[14]])).sPropertyInitialValue;
      answers.state.push({ name, type, nullable, undefinable, initialValue });
      StateIndex++;
    }
  }
  return answers;
};

module.exports = async () => {
  const answers = await askQuestions();
  console.log("your answers are: ", answers);
};
