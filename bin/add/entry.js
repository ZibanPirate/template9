const inquirer = require("inquirer");

const askQuestions = () => {
  const questions = [
    {
      name: "name",
      type: "input",
      message: "What is the name of the entry?",
      validate: (answer) => {
        if (!answer) return "please provide a name for the entry";
        else return true;
      },
    },
    {
      name: "defaultLanguageCode",
      type: "input",
      message: "What is the default language code for this entry?",
      default: "en",
      validate: (answer) => {
        if (!answer) return "please provide a the default language code for this entry";
        else return true;
      },
    },
  ];
  return inquirer.prompt(questions);
};

module.exports = async () => {
  const answers = await askQuestions();
  console.log("your answers are: ", answers);
};
