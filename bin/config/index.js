module.exports = {
  initQuestions: [
    {
      name: "name",
      type: "input",
      message: "what is the name of the project?",
      validate: (answer) => {
        return answer ? true : "please provide a name for the project";
      },
    },
    {
      name: "root",
      type: "input",
      message: "what is the root of the project?",
      default: "frontend",
    },
    {
      name: "docker",
      type: "confirm",
      message: "use docker?",
      default: true,
    },
    {
      name: "install",
      type: "confirm",
      message: "install dependencies?",
      default: true,
    },
    {
      name: "entry",
      type: "confirm",
      message: "add the first entry?",
      default: true,
    }
  ],
  entryQuestions: [
    {
      name: "name",
      type: "input",
      message: "what is the name of the entry?",
      validate: (answer) => {
        return answer ? true : "please provide a name for the entry";
      },
    },
    {
      name: "defaultLanguageCode",
      type: "input",
      message: "What is the default language code for this entry?",
      default: "en",
      validate: (answer) => {
        return answer ? true : "please provide a the default language code for this entry";
      },
    },
  ]
}