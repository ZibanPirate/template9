const arg = require("arg");

module.exports = () => {
  // choose what command:
  const args = arg({});
  if (args._.length <= 1) { console.log("missing command!"); return; }

  switch (args._[1]) {
    case "entry":
      console.log("entry");
      break;

    case "config":
      console.log("config");
      break;

    case "type":
      console.log("type");
      break;

    case "scene":
      console.log("scene");
      break;

    case "component":
      console.log("component");
      break;

    case "lazy-action":
      console.log("lazy-action");
      break;

    case "action":
      console.log("action");
      break;

    default:
      console.log("unknown command!");
      break;
  }
};
