#! /usr/bin/env node

const chalk = require("chalk");
const figlet = require("figlet");
const arg = require("arg");

// show script introduction
console.log(chalk.green(figlet.textSync("t9")));

// choose what command:
const args = arg({ "--version": Boolean, "-v": "--version" });

if (args["--version"]) { require("./version")(); }

if (args._.length <= 0) { console.log("missing command!"); process.exit(); }

switch (args._[0]) {
  case "init":
    require("./init")();
    break;

  case "upgrade":
    console.log("upgrade");
    break;

  case "add":
    require("./add")();
    break;

  default:
    console.log("unknown command!");
    break;
}
