const types = ["string", "number", "boolean"];
const entries = ["main", "admin"];
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
  addEntryQuestions: [
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
  ],
  addConfigQuestions: [
    {
      name: "level",
      type: "list",
      message: "where do you want put the config?",
      choices: ["entry level", "frontend level", "fullstack level"],
    },
    {
      name: "entry",
      type: "list",
      message: "in what entry do you want put the config?",
      choices: entries,
    },
    {
      name: "name",
      type: "input",
      message: "what is the name of the config?",
      validate: (answer) => {
        return answer ? true : "please provide a name for the config";
      },
    },
    {
      name: "extension",
      type: "list",
      message: "what is the name of the config?",
      choices: ["typescript", "javascript"],
    },
  ],
  addTypeQuestions: [
    {
      name: "level",
      type: "list",
      message: "where do you want put the type?",
      choices: ["entry level", "frontend level", "fullstack level"],
    },
    {
      name: "entry",
      type: "list",
      message: "in what entry do you want put the type?",
      choices: entries,
    },
    {
      name: "name",
      type: "input",
      message: "what is the name of the type?",
      validate: (answer) => {
        return answer ? true : "please provide a name for the type";
      },
    },
    {
      name: "propertyName",
      type: "input",
      message: "property name",
    },
    {
      name: "propertyType",
      type: "list",
      message: "type",
      choices: [...types, "custom"],
    },
    {
      name: "customPropertyType",
      type: "input",
      message: "enter custom property type",
      validate: (answer) => {
        return answer ? true : "please provide a custom type";
      },
    },
    {
      name: "propertyRequired",
      type: "confirm",
      message: "required?",
      default: true,
    },
  ],
};
