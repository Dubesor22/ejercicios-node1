exports.esPar = (a) => {
  return a % 2 === 0 ? logger.info(`es Par`) : logger.error(`es Impar`);
};
const Logger = require("logplease");
const logger = Logger.create("utils");
