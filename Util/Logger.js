/*
Logger class for easy and aesthetically pleasing console logging
*/
const chalk = require("chalk");
const moment = require("moment");

class Logger {
  static log(content, type = "log") {
    const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;
    switch (type) {
      case "log": {
        return console.log(`${timestamp} ${chalk.bgBlue(type)} ${content} `);
      }
      case "warn": {
        return console.log(`${timestamp} ${chalk.black.bgYellow(type)} ${content} `);
      }
      case "error": {
        return console.log(`${timestamp} ${chalk.bgRed(type)} ${content} `);
      }
      case "debug": {
        return console.log(`${timestamp} ${chalk.green(type)} ${content} `);
      } 
      default: throw new TypeError("Logger type must be either warn, debug, log or error.");
    } 
  }
  
  static error(content) {
    return this.log(content, "error");
  }
  
  static warn(content) {
    return this.log(content, "warn");
  }
  
  static debug(content) {
    return this.log(content, "debug");
  } 
}

module.exports = Logger;
