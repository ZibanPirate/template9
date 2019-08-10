const arg = require("arg");

module.exports = () => {
  // choose what command:
  const args = arg({});
  if (args._.length <= 1) { console.log("missing command!"); return; }

  switch (args._[1]) {
    case "entry":
      require("./entry")();
      break;

    case "config":
      require("./config")();
      break;

    case "type":
      require("./type")();
      break;

    case "scene":
      require("./scene")();
      break;

    case "component":
      require("./component")();
      break;

    case "lazy-operation":
      require("./lazy-operation")();
      break;

    case "action":
      require("./action")();
      break;

    case "reducer":
      require("./reducer")();
      break;

    default:
      console.log("unknown command!");
      break;
  }
};
