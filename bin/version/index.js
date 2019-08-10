const packageJSON = require("../../package.json");
module.exports = async () => {
  console.log("version " + packageJSON.version);
  process.exit(0);
};
