let http = require("http");
const Logger = require("logplease");
const logger = Logger.create("utils");
logger.debug(`Hola Mundo`);
// logger.log(`This is a log message`); // alias for debug()
logger.info(`Noticias de ultima hora`);
logger.warn(`Tirando warnings como campeones`);
logger.error(`Algo no esta bien!!`);

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });

//     res.end(logger.debug("¡Hola Mundo!"));
//     // res.end("Aprendiendo en The Bridge!");
//   })

//   .listen(8080);
