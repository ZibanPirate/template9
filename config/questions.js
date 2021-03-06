const constants = require("./constants");
const types = require("./types");
const t9config = require("./t9config");

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
      name: constants.root,
      type: "input",
      message: "what is the root of the project?",
      validate: (answer) => {
        return answer ? true : "please provide a root for the project";
      },
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
      choices: t9config.entries,
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
      message: "JS or TS?",
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
      choices: t9config.entries,
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
  addSceneQuestions: [
    {
      name: "entry",
      type: "list",
      message: "in what entry do you want put the scene?",
      choices: t9config.entries,
    },
    {
      name: "scene",
      type: "list",
      message: "under what scene do you want put?",
    },
    {
      name: "name",
      type: "input",
      message: "what is the name of the scene?",
      validate: (answer) => {
        return answer ? true : "please provide a name for the scene";
      },
    },
    {
      name: "url",
      type: "input",
      message: "what is the url path of the scene?",
      validate: (answer) => {
        return answer ? true : "please provide a url path for the scene";
      },
    },
    {
      name: "exact",
      type: "confirm",
      message: "preform exact match on the url path?",
      default: true,
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
      name: "propertyNullable",
      type: "confirm",
      message: "nullable?",
      default: true,
    },
    {
      name: "propertyUndefinable",
      type: "confirm",
      message: "undefinable?",
      default: false,
    },
    {
      name: "propertyInitialValue",
      type: "input",
      message: "initial value?",
    },
    {
      name: "lazyOperation",
      type: "confirm",
      message: "add lazy operation for this scene?",
      default: true,
    },
    {
      name: "operationName",
      type: "input",
      message: "what is the name of the operation?",
      validate: (answer) => {
        return answer ? true : "please provide a name for the operation";
      },
    },
    {
      name: "operationRepeatable",
      type: "confirm",
      message: "repeatable?",
      default: false,
    },
    {
      name: "actionsGroup",
      type: "list",
      message: "under what group do you want put its actions?",
    },
    {
      name: "newActionsGroup",
      type: "input",
      message: "enter group name",
      validate: (answer) => {
        return answer ? true : "please provide a group name";
      },
    },
    {
      name: "actionName",
      type: "input",
      message: "Action name",
    },
  ],
  addComponentQuestions: [
    {
      name: "entry",
      type: "list",
      message: "in what entry do you want put the component?",
      choices: t9config.entries,
    },
    {
      name: "scene",
      type: "list",
      message: "under what scene do you want put?",
    },
    {
      name: "name",
      type: "input",
      message: "what is the name of the component?",
      validate: (answer) => {
        return answer ? true : "please provide a name for the component";
      },
    },
    {
      name: "stateless",
      type: "confirm",
      message: "stateless?",
      default: true,
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
      name: "propertyNullable",
      type: "confirm",
      message: "nullable?",
      default: true,
    },
    {
      name: "propertyUndefinable",
      type: "confirm",
      message: "undefinable?",
      default: false,
    },
    {
      name: "sPropertyName",
      type: "input",
      message: "property name",
    },
    {
      name: "sPropertyType",
      type: "list",
      message: "type",
      choices: [...types, "custom"],
    },
    {
      name: "customSPropertyType",
      type: "input",
      message: "enter custom property type",
      validate: (answer) => {
        return answer ? true : "please provide a custom type";
      },
    },
    {
      name: "sPropertyNullable",
      type: "confirm",
      message: "nullable?",
      default: true,
    },
    {
      name: "sPropertyUndefinable",
      type: "confirm",
      message: "undefinable?",
      default: false,
    },
    {
      name: "sPropertyInitialValue",
      type: "input",
      message: "initial value?",
    },
  ],
  addLazyOperationQuestions: [
    {
      name: "entry",
      type: "list",
      message: "in what entry do you want put the lazy operation?",
      choices: t9config.entries,
    },
    {
      name: "scene",
      type: "list",
      message: "under what scene do you want put?",
    },
    {
      name: "name",
      type: "input",
      message: "what is the name of the lazy operation?",
      validate: (answer) => {
        return answer ? true : "please provide a name for the lazy operation";
      },
    },
    {
      name: "url",
      type: "input",
      message: "what is the url path of the lazy operation?",
      validate: (answer) => {
        return answer ? true : "please provide a url path for the lazy operation";
      },
    },
    {
      name: "exact",
      type: "confirm",
      message: "preform exact match on the url path?",
      default: true,
    },
    {
      name: "repeatable",
      type: "confirm",
      message: "repeatable?",
      default: false,
    },
    {
      name: "actionsGroup",
      type: "list",
      message: "under what group do you want put its actions?",
    },
    {
      name: "newActionsGroup",
      type: "input",
      message: "enter group name",
      validate: (answer) => {
        return answer ? true : "please provide a group name";
      },
    },
    {
      name: "actionName",
      type: "input",
      message: "Action name",
    },
  ],
  addActionQuestions: [
    {
      name: "entry",
      type: "list",
      message: "in what entry do you want put the action?",
      choices: t9config.entries,
    },
    {
      name: "actionsGroup",
      type: "list",
      message: "under what group do you want put this actions?",
    },
    {
      name: "newActionsGroup",
      type: "input",
      message: "enter group name",
      validate: (answer) => {
        return answer ? true : "please provide a group name";
      },
    },
    {
      name: "name",
      type: "input",
      message: "what is the name of the action?",
      validate: (answer) => {
        return answer ? true : "please provide a name for the action";
      },
    },
    {
      name: "parameterName",
      type: "input",
      message: "parameter name",
    },
    {
      name: "parameterType",
      type: "list",
      message: "type",
      choices: [...types, "custom"],
    },
    {
      name: "customParameterType",
      type: "input",
      message: "enter custom parameter type",
      validate: (answer) => {
        return answer ? true : "please provide a custom type";
      },
    },
    {
      name: "parameterRequired",
      type: "confirm",
      message: "required?",
      default: true,
    },
    {
      name: "parameterDefaultValue",
      type: "input",
      message: "default value?",
    },

  ],
  addReducerQuestions: [
    {
      name: "entry",
      type: "list",
      message: "in what entry do you want put the reducer?",
      choices: t9config.entries,
    },
    {
      name: "reducer",
      type: "list",
      message: "under what reducer do you want put?",
    },
    {
      name: "name",
      type: "input",
      message: "what is the name of the reducer?",
      validate: (answer) => {
        return answer ? true : "please provide a name for the reducer";
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
      name: "propertyNullable",
      type: "confirm",
      message: "nullable?",
      default: true,
    },
    {
      name: "propertyUndefinable",
      type: "confirm",
      message: "undefinable?",
      default: false,
    },
    {
      name: "propertyInitialValue",
      type: "input",
      message: "initial value?",
    },
  ],
};
